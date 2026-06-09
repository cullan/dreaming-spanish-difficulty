function SeriesDifficultyBadgeOverlay({ episodes }) {
  const [minDifficulty, maxDifficulty] = seriesDifficultyRange(episodes);

  return reactExports.createElement(
    Badge,
    {
      variant: 'overlay',
      size: 'xs',
      startIcon: 'thick-difficulty',
      className: 'ds-video-thumbnail__badge ds-video-thumbnail__badge--vocab-range',
    },
    `${minDifficulty}-${maxDifficulty}`
  );
}
