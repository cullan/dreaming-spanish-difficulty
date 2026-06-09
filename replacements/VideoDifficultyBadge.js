function VideoDifficultyBadge({ difficultyScore = 0 }) {
  return reactExports.createElement(
    Badge,
    {
      variant: 'neutral',
      size: 'sm',
      startIcon: 'thick-difficulty',
    },
    calculateDifficulty(difficultyScore)
  );
}
