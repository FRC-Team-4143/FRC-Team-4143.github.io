import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

// A grid of short looping clips from real robot videos. Clips are silent MP4s in static/img/design/mechanisms/clips.
const PROGRAM_COLORS = {FRC: '#0066b3', FTC: '#f57e25'};

export default function RobotClips({items}) {
  const base = useBaseUrl('/img/design/mechanisms/clips/');
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem'}}>
      {items.map(({clip, text, team, video, program = 'FRC'}) => (
        <figure key={clip} style={{margin: 0}}>
          <video
            src={`${base}${clip}.mp4`}
            aria-label={`${team}: ${text}`}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            style={{width: '100%', height: 'auto', aspectRatio: '16 / 9', background: '#000', borderRadius: '6px', display: 'block'}}
          />
          <figcaption style={{fontSize: '0.9rem'}}>
            <span style={{background: PROGRAM_COLORS[program], color: '#fff', borderRadius: '4px', padding: '0.05rem 0.4rem', fontSize: '0.75rem', marginRight: '0.4rem'}}>{program}</span>
            <b>{team}</b>
            <div>{text} <a href={video}>Full video</a></div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
