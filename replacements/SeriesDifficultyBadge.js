function SeriesDifficultyBadge({ episodes }) {
  const [minDifficulty, maxDifficulty] = seriesDifficultyRange(episodes);

  return reactExports.createElement(
    Badge,
    {
      variant: 'neutral',
      size: 'sm',
      startIcon: 'thick-difficulty',
    },
    `${minDifficulty}-${maxDifficulty}`
  );
}
