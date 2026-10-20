import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import labs from '@site/src/data/labs';

// A lab page: the standalone lab from static/lab-tools/ in an iframe that fills the screen below the navbar.
// The labs are plain HTML pages; they read this page's light/dark mode and follow it when it changes.
export default function LabFrame({slug}) {
  const lab = labs.find((l) => l.slug === slug);
  const src = useBaseUrl(`/lab-tools/${slug}.html`);
  return (
    <Layout title={lab.title} description={lab.blurb} noFooter>
      <main>
        <iframe
          src={src}
          title={lab.title}
          allow="gamepad; clipboard-write"
          style={{
            display: 'block',
            width: '100%',
            height: 'calc(100vh - var(--ifm-navbar-height))',
            border: 0,
          }}
        />
      </main>
    </Layout>
  );
}
