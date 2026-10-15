import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

// A grid of animated mechanism types. GIFs live in static/img/design/mechanisms/types.
export default function MechanismTypes({items}) {
  const base = useBaseUrl('/img/design/mechanisms/types/');
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem'}}>
      {items.map(({img, name, text}) => (
        <figure key={img} style={{margin: 0}}>
          <img src={`${base}${img}.gif`} alt={`${name} animation`} width="400" style={{width: '100%', height: 'auto', borderRadius: '6px'}}/>
          <figcaption>
            <b>{name}</b>
            <div style={{fontSize: '0.9rem'}}>{text}</div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
