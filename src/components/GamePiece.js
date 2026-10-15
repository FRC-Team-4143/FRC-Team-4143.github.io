import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

// A game piece drawing with its key dimensions. Each drawing is scaled to fit; lineup.svg compares them at one scale.
const PROGRAM_COLORS = {FRC: '#d8312b', FTC: '#f57e25'};

export default function GamePiece({img, name, specs, source, sourceLabel = 'Official specs', program = 'FRC'}) {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem'}}>
      <img src={useBaseUrl(`/img/design/game-pieces/${img}.svg`)} alt={name} width="220"/>
      <div style={{flex: '1 1 240px'}}>
        <div style={{fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem'}}>
          <span style={{background: PROGRAM_COLORS[program], color: '#fff', borderRadius: '4px', padding: '0.1rem 0.45rem', fontSize: '0.8rem', marginRight: '0.5rem', verticalAlign: 'middle'}}>{program}</span>
          {name}
        </div>
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
