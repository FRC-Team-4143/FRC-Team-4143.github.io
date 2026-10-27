import React from 'react';
import Link from '@docusaurus/Link';
import labs from '@site/src/data/labs';

// A link that opens a lab full screen (/labs/<slug>) in a new tab. `button` draws it as a button, for the
// "Try It" section a lab goes with; without it, it is a plain link for tips.
export function LabLink({slug, button = false}) {
  const lab = labs.find((l) => l.slug === slug);
  return (
    <Link
      to={`/labs/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className={button ? 'button button--primary' : undefined}>
      Open the {lab.title} in a new tab ↗
    </Link>
  );
}
