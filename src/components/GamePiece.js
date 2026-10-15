import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

// A game piece drawing with its key dimensions. Drawings in static/img/design/game-pieces share one scale.
export default function GamePiece({img, name, specs, source, sourceLabel = 'Official specs'}) {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem'}}>
      <img src={useBaseUrl(`/img/design/game-pieces/${img}.svg`)} alt={name} width="220"/>
      <div style={{flex: '1 1 240px'}}>
        <div style={{fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem'}}>{name}</div>
        <table>
          <tbody>
            {specs.map(([label, value]) => (
              <tr key={label}><td><b>{label}</b></td><td>{value}</td></tr>
            ))}
          </tbody>
        </table>
        {source && <a href={source}>{sourceLabel}</a>}
      </div>
    </div>
  );
}
