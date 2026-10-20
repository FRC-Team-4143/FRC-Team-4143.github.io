import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import labs from '@site/src/data/labs';

// A lab inside a docs page: an "Open full screen" button, the docs it goes with, and the lab itself in an iframe.
// The full-screen version is the same lab at /labs/<slug> (LabFrame).
export function LabEmbed({slug}) {
  const lab = labs.find((l) => l.slug === slug);
  const src = useBaseUrl(`/lab-tools/${slug}.html#inline`);
  return (
    <div className="margin-vert--md">
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1rem', alignItems: 'center', marginBottom: '0.75rem'}}>
        <Link className="button button--primary" to={`/labs/${slug}`}>
          Open full screen
        </Link>
        <span>
          Goes with{' '}
          {lab.docs.map((d, i) => (
            <React.Fragment key={d.to}>
              {i > 0 && ', '}
              <Link to={d.to}>{d.label}</Link>
            </React.Fragment>
          ))}
        </span>
      </div>
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

// Every lab as a list of cards, for the Labs overview page in the docs.
export function LabList() {
  return (
    <div className="row">
      {labs.map((lab) => (
        <div key={lab.slug} className="col col--6 margin-bottom--lg">
          <div className="card shadow--tl" style={{height: '100%'}}>
            <div className="card__header">
              <h3 style={{marginBottom: 0}}>
                <span aria-hidden="true">{lab.icon}</span> <Link to={`/docs/software/labs/${lab.slug}`}>{lab.title}</Link>
              </h3>
            </div>
            <div className="card__body">
              <p style={{marginBottom: 0}}>{lab.blurb}</p>
            </div>
            <div className="card__footer">
              <small>
                Goes with{' '}
                {lab.docs.map((d, i) => (
                  <React.Fragment key={d.to}>
                    {i > 0 && ', '}
                    <Link to={d.to}>{d.label}</Link>
                  </React.Fragment>
                ))}
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
