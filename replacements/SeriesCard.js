SeriesCard = (u) => {
  const {
    series: l,
    seriesDataItem: p,
    onClick: m
  }
    = u,
    [
      y,
      b
    ] = reactExports.useState(!1);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement(
      'div',
      {
        className: 'ds-series-card',
        onClick: C => m(C)
      },
      reactExports.createElement(
        SeriesArtwork,
        {
          type: 'lazy',
          series: l,
          kind: 'vertical',
          alt: l.title,
          className: 'ds-series-card__image',
          onLoad: () => b(!1),
          onError: () => b(!0)
        }
      ),
      reactExports.createElement('div', {
        className: 'ds-series-card__overlay'
      }),
      y &&
        reactExports.createElement('div', {
          className: 'ds-series-card__title-overlay'
        }, l.title),
      reactExports.createElement(SeriesDifficultyBadgeOverlay, { episodes: p.episodes }),
      p.locked &&
        reactExports.createElement(
          'div',
          {
            className: 'ds-series-card__premium-overlay'
          },
          reactExports.createElement(
            IconMoon,
            {
              className: 'ds-series-card__premium-icon',
              icon: 'thick-lock'
            }
          )
        )
    )
  )
};
