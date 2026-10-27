import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useColorMode} from '@docusaurus/theme-common';
import {BT_SPEC_XML} from '@site/src/data/btSpec';
import styles from './ArboristTree.module.css';

// A behavior tree drawn by Arborist, the viewer inside Arbor (the same bundle the Behavior Tree Lab loads), so the
// docs' trees look exactly like Arbor's. Pan, zoom, select a node, and open a SubTree with +.
//
//   <ArboristTree xml={`<root ...>...</root>`} />                  one tree file
//   <ArboristTree files={[{path, xml}, ...]} tree="CitrusSynergy" />  several files (e.g. an auto and common.xml)
//   <ArboristTree xml={...} steps={[...]} />                         with an animation, played tick by tick
//
// An animation step: {label: "Tick 2", caption: "What just happened.", set: {"Drive path": "SUCCESS", Aim: "RUNNING"}}.
// `set` keys a node by its name="" attribute, or by its type when only one node has it. A status sticks until a later
// step changes it; IDLE fades the node's last result, the way Arbor shows a node its parent reset. `reset: true`
// clears every status first.

const DELAY_MS = 1900; // between steps while playing
const NARROW = '(max-width: 600px)'; // phones: grow the tree downward, not sideways (as the lab does)
const END_PAUSE_MS = 3200; // on the last step, before looping

function nodeKeys(root) {
  // name="" first; then a type, if only one node in the tree has it.
  const byName = new Map();
  const byType = new Map();
  const walk = (node) => {
    if (!node) return;
    if (node.attrs?.name) byName.set(node.attrs.name, node.uid);
    byType.set(node.type, byType.has(node.type) ? null : node.uid);
    (node.children || []).forEach(walk);
  };
  walk(root);
  const keys = new Map(byName);
  for (const [type, uid] of byType) if (uid && !keys.has(type)) keys.set(type, uid);
  return keys;
}

function buildFrames(steps, keys, treeId, warn) {
  const frames = [];
  let current = {};
  steps.forEach((step, i) => {
    if (step.reset) current = {};
    else current = {...current};
    for (const [key, status] of Object.entries(step.set || {})) {
      const uid = keys.get(key);
      if (!uid) {
        warn(`step ${i + 1}: no node named "${key}"`);
        continue;
      }
      const prev = current[uid];
      current[uid] =
        status === 'IDLE'
          ? {status: 'IDLE', last: prev ? prev.last : 'IDLE', t: i, done: false}
          : {status, last: status, t: i};
    }
    const statusByPath = {};
    const statusByDef = {};
    for (const [uid, info] of Object.entries(current)) {
      statusByPath[uid] = info;
      statusByDef[`${treeId}:${uid}`] = info;
    }
    frames.push({statusByUid: {}, statusByPath, statusByDef});
  });
  return frames;
}

function Viewer({files, tree, steps, height, label, dir}) {
  const {colorMode} = useColorMode();
  const moduleUrl = useBaseUrl('/lab-tools/vendor/arborist/arborist-mount.js');
  const host = useRef(null);
  const box = useRef(null);
  const viewerRef = useRef(null);
  const [error, setError] = useState('');
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(false);
  const [frames, setFrames] = useState(null);
  const [treeId, setTreeId] = useState('');
  const [step, setStep] = useState(0);
  const reduceMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  );
  const [playing, setPlaying] = useState(!reduceMotion);
  const [visible, setVisible] = useState(false);

  // Load Arborist and the trees once.
  useEffect(() => {
    let cancelled = false;
    let viewer = null;
    import(/* webpackIgnore: true */ new URL(moduleUrl, window.location.href).href)
      .then(({createTreeViewer}) => {
        if (cancelled || !host.current) return;
        const narrow = window.matchMedia(NARROW).matches;
        viewer = createTreeViewer(host.current, {theme: colorMode, dir: dir || (narrow ? 'LR' : 'TB'), explainEdges: false});
        const loaded = viewer.load({spec: {path: 'nodes.xml', xml: BT_SPEC_XML}, files});
        const problems = loaded.diagnostics.filter((d) => d.severity === 'error');
        if (problems.length) console.warn('ArboristTree:', problems.map((d) => d.message));
        const main = tree || loaded.files.find((f) => f.mainTree)?.mainTree || loaded.trees[0]?.id;
        const def = loaded.trees.find((t) => t.id === main);
        if (!def) throw new Error(`no tree "${main}" in the files`);
        viewer.showTree(main);
        viewerRef.current = viewer;
        setTreeId(main);
        if (steps && steps.length) {
          setFrames(buildFrames(steps, nodeKeys(def.root), main, (m) => console.warn(`ArboristTree ${main}: ${m}`)));
        }
        setReady(true);
        setTimeout(() => viewer.fit(), 60);
      })
      .catch((e) => !cancelled && setError(String(e.message || e)));
    return () => {
      cancelled = true;
      if (viewer) viewer.destroy();
      viewerRef.current = null;
    };
    // The trees are fixed for a given page; reload only if they change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleUrl, JSON.stringify(files), tree]);

  useEffect(() => {
    viewerRef.current?.setOptions({theme: colorMode});
  }, [colorMode, ready]);

  useEffect(() => {
    if (dir || !ready) return undefined;
    const mq = window.matchMedia(NARROW);
    const onChange = () => {
      viewerRef.current?.setOptions({dir: mq.matches ? 'LR' : 'TB'});
      setTimeout(() => viewerRef.current?.fit(), 60);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [dir, ready]);

  // Show the current step's statuses.
  useEffect(() => {
    if (!ready || !frames) return;
    viewerRef.current?.setStatuses(frames[step], treeId);
  }, [ready, frames, step, treeId]);

  // Play only while on screen.
  useEffect(() => {
    if (!box.current || !frames) return undefined;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {threshold: 0.35});
    io.observe(box.current);
    return () => io.disconnect();
  }, [frames]);

  useEffect(() => {
    if (!frames || !playing || !visible) return undefined;
    const last = step === frames.length - 1;
    const t = setTimeout(() => setStep(last ? 0 : step + 1), last ? END_PAUSE_MS : DELAY_MS);
    return () => clearTimeout(t);
  }, [frames, playing, visible, step]);

  // Resting, the page scrolls over the diagram (Ctrl/Cmd + wheel still zooms); click or tap it to pan and zoom freely.
  const onWheelCapture = useCallback(
    (e) => {
      if (!active && !e.ctrlKey && !e.metaKey) e.stopPropagation();
    },
    [active],
  );
  const onTouchStartCapture = useCallback(
    (e) => {
      if (!active) e.stopPropagation();
    },
    [active],
  );

  const current = frames && steps[step];
  return (
    <figure className={styles.figure} ref={box}>
      <div
        className={`${styles.viewer} ${active ? styles.active : styles.resting}`}
        style={{height}}
        role="img"
        aria-label={label}
        onWheelCapture={onWheelCapture}
        onTouchStartCapture={onTouchStartCapture}
        onPointerDown={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setActive(false)}>
        <div ref={host} className={styles.host} />
        {!ready && !error && <div className={styles.msg}>Loading the tree viewer…</div>}
        {error && <div className={styles.msg}>The tree viewer could not load ({error}).</div>}
        {ready && !active && <div className={styles.hint}>Click to pan and zoom</div>}
      </div>
      {frames && (
        <figcaption className={styles.player}>
          <div className={styles.buttons}>
            <button type="button" className="button button--sm button--secondary" onClick={() => { setPlaying(false); setStep(0); }} title="Start over">
              ⏮
            </button>
            <button type="button" className="button button--sm button--secondary" onClick={() => { setPlaying(false); setStep(Math.max(0, step - 1)); }} disabled={step === 0} title="Back one step">
              ◀
            </button>
            <button type="button" className="button button--sm button--primary" onClick={() => setPlaying(!playing)} title={playing ? 'Pause' : 'Play'}>
              {playing ? 'Pause' : 'Play'}
            </button>
            <button type="button" className="button button--sm button--secondary" onClick={() => { setPlaying(false); setStep(Math.min(frames.length - 1, step + 1)); }} disabled={step === frames.length - 1} title="Forward one step">
              ▶
            </button>
          </div>
          <div className={styles.caption} aria-live="polite">
            <span className={styles.label}>{current.label}</span> {current.caption}
          </div>
          <div className={styles.count}>
            {step + 1} / {frames.length}
          </div>
        </figcaption>
      )}
    </figure>
  );
}

export default function ArboristTree({xml, files, tree, steps, height = 340, label, dir}) {
  const all = files || [{path: `trees/${tree || 'Tree'}.xml`, xml}];
  const text = label || `Behavior tree${tree ? ` ${tree}` : ''}, drawn by Arborist.`;
  return (
    <BrowserOnly fallback={<div className={styles.viewer} style={{height}} aria-label={text} />}>
      {() => <Viewer files={all} tree={tree} steps={steps} height={height} label={text} dir={dir} />}
    </BrowserOnly>
  );
}
