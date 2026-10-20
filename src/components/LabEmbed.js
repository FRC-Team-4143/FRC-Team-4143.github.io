import React, {useEffect} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import labs from '@site/src/data/labs';

// A lab inside the docs section it goes with: an "Open full screen" button and the lab itself in an iframe.
// The full-screen version is the same lab at /labs/<slug> (LabFrame). #inline tells the lab to hide its own
// title and intro, since the docs section already has them.
export function LabEmbed({slug}) {
  const lab = labs.find((l) => l.slug === slug);
  const src = useBaseUrl(`/lab-tools/${slug}.html#inline`);

  // A link to the lab's section (#<slug>) jumps there before the Mermaid diagrams above it have drawn, and they
  // push the lab down. Keep the heading in place while the page settles; stop as soon as the reader scrolls.
  useEffect(() => {
    if (window.location.hash !== `#${slug}`) return undefined;
    const heading = document.getElementById(slug);
    if (!heading) return undefined;
    const settle = () => heading.scrollIntoView({block: 'start'});
    const observer = new ResizeObserver(settle);
    const stop = () => observer.disconnect();
    observer.observe(heading.closest('article') ?? document.body);
    const timer = setTimeout(stop, 3000);
    window.addEventListener('wheel', stop, {once: true});
    window.addEventListener('touchmove', stop, {once: true});
    window.addEventListener('keydown', stop, {once: true});
    return () => {
      stop();
      clearTimeout(timer);
      window.removeEventListener('wheel', stop);
      window.removeEventListener('touchmove', stop);
      window.removeEventListener('keydown', stop);
    };
  }, [slug]);

  return (
    <div className="margin-vert--md">
      <p>
        <Link className="button button--primary button--sm" to={`/labs/${slug}`}>
          Open the {lab.title} full screen
        </Link>
      </p>
      <iframe
        src={src}
        title={lab.title}
        allow="gamepad; clipboard-write"
        loading="lazy"
        style={{
          display: 'block',
          width: '100%',
          height: 'calc(100vh - var(--ifm-navbar-height) - 2rem)',
          minHeight: '600px',
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: 'var(--ifm-global-radius)',
        }}
      />
    </div>
  );
}
