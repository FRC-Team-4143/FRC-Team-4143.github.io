// Follows the docs site's light/dark mode. Load it in <head>, right after lab-base.css, so the page never flashes
// the wrong theme. Embedded in a site page (LabFrame): copy the parent page's data-theme and follow it live when the
// visitor toggles. Opened on its own: use the theme Docusaurus saved in localStorage "theme".
// Adapted from FRC Team 1756 Argos's labs (BSD 3-Clause, see THIRD_PARTY_NOTICES.md).
(function () {
  const embedded = window.parent !== window;
  if (embedded) document.documentElement.classList.add("embedded");
  // #inline: shown inside a docs page (LabEmbed), which already has the title and intro.
  if (/(^#|[&#])inline\b/.test(location.hash)) document.documentElement.classList.add("inline");
  function syncTheme() {
    let t = null;
    try { if (embedded) t = window.parent.document.documentElement.getAttribute("data-theme"); } catch (e) {}
    if (!t) { try { t = localStorage.getItem("theme"); } catch (e) {} }
    if (t === "dark" || t === "light") document.documentElement.dataset.theme = t;
  }
  syncTheme();
  try {
    if (embedded) new MutationObserver(syncTheme).observe(window.parent.document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  } catch (e) {}
})();
