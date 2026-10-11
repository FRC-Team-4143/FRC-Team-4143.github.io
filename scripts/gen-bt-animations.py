#!/usr/bin/env python3
"""Generates the animated behavior-tree SVGs used on the "Behavior trees" docs page.

    python3 scripts/gen-bt-animations.py

Writes static/img/software/controls/behavior-trees/*.svg. Each file is a self-contained, looping
animation (pure CSS keyframes, so it works inside an <img>): nodes change colour as the tree is
ticked, a ring and bright edges show where the current tick goes, a badge names each node's status,
and a caption explains the step. Colours match Arbor's live view (orange running, green success,
red failure). Under prefers-reduced-motion the animation is off and the most telling frame is shown.

To add or change an animation, edit SCENARIOS below: a scenario is a tree plus a list of frames.
"""
import html
import pathlib

OUT = pathlib.Path(__file__).resolve().parent.parent / "static/img/software/controls/behavior-trees"

COL = {"idle": "#6b7280", "running": "#f59e0b", "success": "#16a34a", "failure": "#dc2626"}
BADGE = {"running": "RUNNING", "success": "SUCCESS", "failure": "FAILURE"}
EDGE, EDGE_ON = "#9ca3af", "#facc15"
PANEL, PANEL_LINE, PANEL_TEXT = "#1e2433", "#3b4357", "#e8eaf0"
W, NH = 640, 38


def node_width(label: str) -> int:
    return max(112, int(8.4 * len(label)) + 28)


def tree(*nodes):
    """(id, label, x, y, parent, kind) -> dicts; kind is 'control' (box) or 'leaf' (pill)."""
    out = []
    for nid, label, x, y, parent, kind in nodes:
        out.append(dict(id=nid, label=label, x=x, y=y, parent=parent, kind=kind, w=node_width(label)))
    return out


def frame(dur, tick, st, ticking, cap):
    return dict(dur=dur, tick=tick, st=st, ticking=ticking, cap=cap)


SEQ_NODES = tree(
    ("seq", "→ Sequence", 320, 56, None, "control"),
    ("drive", "Drive path", 110, 156, "seq", "leaf"),
    ("aim", "Aim", 320, 156, "seq", "leaf"),
    ("shoot", "Shoot", 530, 156, "seq", "leaf"),
)
FB_NODES = tree(
    ("fb", "? Fallback", 320, 56, None, "control"),
    ("a", "Aim: vision", 110, 156, "fb", "leaf"),
    ("b", "Aim: manual", 320, 156, "fb", "leaf"),
    ("c", "Skip the shot", 530, 156, "fb", "leaf"),
)

SCENARIOS = {
    "sequence-success": dict(
        title="A Sequence where every child succeeds",
        desc="A Sequence ticks Drive path, Aim and Shoot in order, resuming at the running child each tick, and reports SUCCESS when all three succeed.",
        height=300, static=4, nodes=SEQ_NODES,
        frames=[
            frame(1.8, "Tick 1", {"seq": "running", "drive": "running"}, ["seq", "drive"],
                  ["The Sequence ticks its first child. Driving takes time,", "so Drive path answers RUNNING, and so does the Sequence."]),
            frame(1.5, "Tick 2", {"seq": "running", "drive": "running"}, ["seq", "drive"],
                  ["Next tick the Sequence resumes at the child that was RUNNING.", "Still driving, so still RUNNING."]),
            frame(2.0, "Tick 3", {"seq": "running", "drive": "success", "aim": "running"}, ["seq", "drive", "aim"],
                  ["Drive path finishes: SUCCESS. The Sequence moves on to the next", "child in the same tick. Aim starts and is RUNNING."]),
            frame(1.8, "Tick 4", {"seq": "running", "drive": "success", "aim": "success", "shoot": "running"}, ["seq", "aim", "shoot"],
                  ["Aim reports SUCCESS, so Shoot is ticked right away.", "Shoot is RUNNING."]),
            frame(2.4, "Tick 5", {"seq": "success", "drive": "success", "aim": "success", "shoot": "success"}, ["seq", "shoot"],
                  ["Every child succeeded, so the Sequence reports SUCCESS", "to its parent."]),
            frame(1.2, "Next run", {}, [], ["Its parent can now run the Sequence again from the start."]),
        ]),
    "sequence-failure": dict(
        title="A Sequence stops at the first failure",
        desc="Drive path succeeds, Aim fails, so the Sequence reports FAILURE and Shoot is never ticked.",
        height=300, static=2, nodes=SEQ_NODES,
        frames=[
            frame(1.6, "Tick 1", {"seq": "running", "drive": "running"}, ["seq", "drive"],
                  ["Drive path is RUNNING, so the Sequence is RUNNING."]),
            frame(2.4, "Tick 2", {"seq": "failure", "drive": "success", "aim": "failure"}, ["seq", "drive", "aim"],
                  ["Drive path succeeds, but Aim answers FAILURE (no target in view).", "The Sequence stops here and reports FAILURE."]),
            frame(2.8, "Tick 2", {"seq": "failure", "drive": "success", "aim": "failure"}, [],
                  ["Shoot was never ticked. A Sequence gives up at the first failure,", "so Shoot can rely on Aim having worked."]),
            frame(1.4, "Next run", {}, [], ["After a FAILURE every child is reset: the next run starts", "again at Drive path."]),
        ]),
    "fallback": dict(
        title="A Fallback is plan B",
        desc="A Fallback tries children in order until one succeeds. Aim: vision fails, Aim: manual succeeds. In a second run every child fails and so does the Fallback.",
        height=300, static=2, nodes=FB_NODES,
        frames=[
            frame(1.6, "Tick 1", {"fb": "running", "a": "running"}, ["fb", "a"],
                  ["A Fallback tries its children in order.", "Aim: vision is RUNNING, so the Fallback waits."]),
            frame(2.0, "Tick 2", {"fb": "running", "a": "failure", "b": "running"}, ["fb", "a", "b"],
                  ["Aim: vision FAILS, so the Fallback tries its next child:", "Aim: manual."]),
            frame(2.6, "Tick 3", {"fb": "success", "a": "failure", "b": "success"}, ["fb", "b"],
                  ["Aim: manual SUCCEEDS. The Fallback stops and reports SUCCESS;", "Skip the shot is never tried."]),
            frame(1.0, "Run again", {}, [], ["Now suppose nothing works..."]),
            frame(3.0, "Tick 1", {"fb": "failure", "a": "failure", "b": "failure", "c": "failure"}, ["fb", "a", "b", "c"],
                  ["Every child failed, so the Fallback reports FAILURE.", "Only now does its parent hear bad news."]),
            frame(1.0, "Next run", {}, [], ["Everything is reset for the next run."]),
        ]),
    "timeout": dict(
        title="A Timeout turns 'might hang' into 'fails after 3 seconds'",
        desc="A Timeout gives Aim three seconds. When time is up it halts Aim and fails, so the Fallback moves on to Backup path, which succeeds.",
        height=390, static=2,
        nodes=tree(
            ("fb", "? Fallback", 320, 50, None, "control"),
            ("to", "Timeout 3 s", 150, 140, "fb", "control"),
            ("aim", "Aim", 150, 228, "to", "leaf"),
            ("backup", "Backup path", 500, 140, "fb", "leaf"),
        ),
        frames=[
            frame(1.8, "0.0 s", {"fb": "running", "to": "running", "aim": "running"}, ["fb", "to", "aim"],
                  ["The Timeout ticks Aim and starts a 3 second clock."]),
            frame(1.6, "1.5 s", {"fb": "running", "to": "running", "aim": "running"}, ["fb", "to", "aim"],
                  ["Aim is still RUNNING, so the Timeout is RUNNING."]),
            frame(2.8, "3.0 s", {"fb": "running", "to": "failure"}, ["fb", "to"],
                  ["Time is up. The Timeout halts Aim (back to idle)", "and answers FAILURE."]),
            frame(1.8, "3.0 s", {"fb": "running", "to": "failure", "backup": "running"}, ["fb", "backup"],
                  ["The Fallback moves on to plan B: Backup path is RUNNING."]),
            frame(2.8, "5.0 s", {"fb": "success", "to": "failure", "backup": "success"}, ["fb", "backup"],
                  ["Backup path succeeds, so the Fallback reports SUCCESS.", "A step that hangs can no longer stall the whole auto."]),
            frame(1.0, "Next run", {}, [], ["Everything is reset for the next run."]),
        ]),
    "reactive-sequence": dict(
        title="A ReactiveSequence re-checks its conditions every tick",
        desc="A ReactiveSequence asks Has game piece? again on every tick. When it fails, Drive path is halted and the sequence fails.",
        height=300, static=2,
        nodes=tree(
            ("rs", "→ ReactiveSequence", 320, 56, None, "control"),
            ("cond", "Has game piece?", 170, 156, "rs", "leaf"),
            ("drive", "Drive path", 470, 156, "rs", "leaf"),
        ),
        frames=[
            frame(2.0, "Tick 1", {"rs": "running", "cond": "success", "drive": "running"}, ["rs", "cond", "drive"],
                  ["A ReactiveSequence re-checks its earlier children on every tick.", "Tick 1: the condition passes and Drive path starts."]),
            frame(2.4, "Tick 2", {"rs": "running", "cond": "success", "drive": "running"}, ["rs", "cond", "drive"],
                  ["Tick 2: the condition is asked again even though Drive path is", "RUNNING. (A plain Sequence would resume at Drive path.)"]),
            frame(3.0, "Tick 3", {"rs": "failure", "cond": "failure"}, ["rs", "cond"],
                  ["Tick 3: the game piece is gone. The condition FAILS, Drive path", "is halted, and the ReactiveSequence reports FAILURE."]),
            frame(1.0, "Next run", {}, [], ["Everything is reset for the next run."]),
        ]),
    "parallel-deadline": dict(
        title="A ParallelDeadline stops everything when its first child finishes",
        desc="Follow path and Intake on event run together. When Follow path, the deadline, succeeds, Intake on event is halted and the node succeeds.",
        height=300, static=2,
        nodes=tree(
            ("pd", "⇉ ParallelDeadline", 320, 56, None, "control"),
            ("path", "Follow path", 170, 156, "pd", "leaf"),
            ("intake", "Intake on event", 470, 156, "pd", "leaf"),
        ),
        frames=[
            frame(2.0, "Tick 1", {"pd": "running", "path": "running", "intake": "running"}, ["pd", "path", "intake"],
                  ["A ParallelDeadline ticks all of its children together every tick.", "The first child, Follow path, is the deadline."]),
            frame(1.6, "Tick 2", {"pd": "running", "path": "running", "intake": "running"}, ["pd", "path", "intake"],
                  ["Both are RUNNING, so the ParallelDeadline is RUNNING."]),
            frame(3.0, "Tick 3", {"pd": "success", "path": "success"}, ["pd", "path"],
                  ["The deadline child finishes: SUCCESS. The others are halted,", "even though Intake on event never completed."]),
            frame(1.0, "Next run", {}, [], ["Everything is reset for the next run."]),
        ]),
}


def pct(t, total):
    return f"{t / total * 100:.3f}".rstrip("0").rstrip(".") or "0"


def keyframes(name, starts, values, prop, total):
    """CSS @keyframes holding values[i] from starts[i]; the loop restarts at 0%."""
    steps = [f"{pct(s, total)}%{{{prop}:{v}}}" for s, v in zip(starts, values)]
    steps.append(f"100%{{{prop}:{values[-1]}}}")
    return f"@keyframes {name}{{{''.join(steps)}}}"


def render(slug, sc):
    frames, nodes = sc["frames"], sc["nodes"]
    H = sc["height"]
    total = sum(f["dur"] for f in frames)
    starts, t = [], 0.0
    for f in frames:
        starts.append(t)
        t += f["dur"]
    by_id = {n["id"]: n for n in nodes}
    static = frames[sc["static"]]
    css, anim, body = [], [], []

    def animate(cls, name, starts_, values, prop):
        css.append(keyframes(name, starts_, values, prop, total))
        anim.append(f".{cls}{{animation:{name} {total:.2f}s infinite step-end}}")

    # edges first, so nodes draw on top of them
    for n in nodes:
        if not n["parent"]:
            continue
        p = by_id[n["parent"]]
        x1, y1, x2, y2 = p["x"], p["y"] + NH / 2, n["x"], n["y"] - NH / 2
        mid = (y1 + y2) / 2
        on = n["id"] in static["ticking"]
        body.append(
            f'<path class="e-{n["id"]}" d="M{x1} {y1}V{mid}H{x2}V{y2}" fill="none" '
            f'stroke="{EDGE_ON if on else EDGE}" stroke-width="{3 if on else 1.6}" stroke-linejoin="round"/>')
        animate(f"e-{n['id']}", f"ke-{n['id']}", starts,
                [EDGE_ON if n["id"] in f["ticking"] else EDGE for f in frames], "stroke")
        css.append(keyframes(f"kew-{n['id']}", starts, [3 if n["id"] in f["ticking"] else 1.6 for f in frames], "stroke-width", total))
        anim.append(f".e-{n['id']}{{animation:ke-{n['id']} {total:.2f}s infinite step-end,kew-{n['id']} {total:.2f}s infinite step-end}}")

    for n in nodes:
        nid, w = n["id"], n["w"]
        x, y = n["x"] - w / 2, n["y"] - NH / 2
        rx = 7 if n["kind"] == "control" else NH / 2
        status = static["st"].get(nid, "idle")
        ringed = nid in static["ticking"]
        body.append(
            f'<rect class="r-{nid}" x="{x:.1f}" y="{y}" width="{w}" height="{NH}" rx="{rx}" fill="{COL[status]}"/>')
        animate(f"r-{nid}", f"kr-{nid}", starts, [COL[f["st"].get(nid, "idle")] for f in frames], "fill")
        body.append(
            f'<rect class="g-{nid}" x="{x - 4:.1f}" y="{y - 4}" width="{w + 8}" height="{NH + 8}" rx="{rx + 4}" '
            f'fill="none" stroke="{EDGE_ON}" stroke-width="3" opacity="{1 if ringed else 0}"/>')
        animate(f"g-{nid}", f"kg-{nid}", starts, [1 if nid in f["ticking"] else 0 for f in frames], "opacity")
        body.append(
            f'<text x="{n["x"]}" y="{n["y"] + 5}" text-anchor="middle" font-size="14" font-weight="600" fill="#fff">'
            f'{html.escape(n["label"])}</text>')
        for st, word in BADGE.items():
            on = status == st
            body.append(
                f'<g class="b-{nid}-{st}" opacity="{1 if on else 0}">'
                f'<rect x="{n["x"] - 34}" y="{n["y"] + NH / 2 - 7}" width="68" height="16" rx="8" fill="{COL[st]}" stroke="#fff" stroke-width="1.5"/>'
                f'<text x="{n["x"]}" y="{n["y"] + NH / 2 + 5}" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">{word}</text></g>')
            animate(f"b-{nid}-{st}", f"kb-{nid}-{st}", starts, [1 if f["st"].get(nid, "idle") == st else 0 for f in frames], "opacity")

    # legend
    lx = W - 20 - 250
    body.append(f'<rect x="{lx}" y="12" width="250" height="26" rx="13" fill="{PANEL}" stroke="{PANEL_LINE}"/>')
    for i, (name, colour) in enumerate([("idle", COL["idle"]), ("running", COL["running"]), ("success", COL["success"]), ("failure", COL["failure"])]):
        cx = lx + 16 + i * 60
        body.append(f'<circle cx="{cx}" cy="25" r="5" fill="{colour}"/><text x="{cx + 9}" y="29" font-size="10.5" fill="{PANEL_TEXT}">{name}</text>')

    # tick label and caption: one group per frame, shown in turn
    body.append(f'<rect x="20" y="12" width="104" height="26" rx="13" fill="{PANEL}" stroke="{PANEL_LINE}"/>')
    cap_y = H - 70
    body.append(f'<rect x="20" y="{cap_y}" width="{W - 40}" height="58" rx="9" fill="{PANEL}" stroke="{PANEL_LINE}"/>')
    for i, f in enumerate(frames):
        shown = i == sc["static"]
        lines = "".join(
            f'<text x="36" y="{cap_y + 24 + j * 20}" font-size="14" fill="{PANEL_TEXT}">{html.escape(line)}</text>'
            for j, line in enumerate(f["cap"]))
        body.append(
            f'<g class="f{i}" opacity="{1 if shown else 0}">'
            f'<text x="72" y="30" text-anchor="middle" font-size="12.5" font-weight="700" fill="{PANEL_TEXT}">{html.escape(f["tick"])}</text>'
            f'{lines}</g>')
        animate(f"f{i}", f"kf{i}", starts, [1 if j == i else 0 for j in range(len(frames))], "opacity")

    title, desc = html.escape(sc["title"]), html.escape(sc["desc"])
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" '
        f'aria-labelledby="t d" font-family="system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">'
        f"<title id=\"t\">{title}</title><desc id=\"d\">{desc}</desc>"
        f"<style>{''.join(css)}@media (prefers-reduced-motion:no-preference){{{''.join(anim)}}}</style>"
        f'{"".join(body)}</svg>\n')


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for slug, sc in SCENARIOS.items():
        (OUT / f"{slug}.svg").write_text(render(slug, sc), encoding="utf-8")
        print("wrote", OUT / f"{slug}.svg")


if __name__ == "__main__":
    main()
