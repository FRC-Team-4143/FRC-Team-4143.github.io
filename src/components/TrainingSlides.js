import React from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import decks from '@site/src/data/trainingDecks';

// A training deck's Google Slides embed. Each deck has a dark and a light copy in Slides;
// this shows the one that matches the site's light/dark mode and swaps when the mode changes.
export default function TrainingSlides({deck}) {
  const {colorMode} = useColorMode();
  const ids = decks[deck];
  const id = colorMode === 'light' ? ids.light : ids.dark;
  return (
    <iframe
      key={id}
      src={`https://docs.google.com/presentation/d/${id}/embed?start=false&loop=false&delayms=3000`}
      title={`Deck ${deck} slides (${colorMode})`}
      frameBorder="0"
      width="960"
      height="569"
      allowFullScreen
      style={{maxWidth: '100%'}}
    />
  );
}
