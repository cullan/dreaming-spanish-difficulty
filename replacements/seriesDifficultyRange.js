function seriesDifficultyRange(episodes) {
  const difficulties = episodes.map(e => e.difficultyScore);
  const min = Math.min(...difficulties);
  const max = Math.max(...difficulties);
  return [calculateDifficulty(min), calculateDifficulty(max)];
}
