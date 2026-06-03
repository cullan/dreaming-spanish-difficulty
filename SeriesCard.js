SeriesCard = (s) => {
  const {
    series: l,
    seriesDataItem: p,
    onClick: m
  }
    = s,
    [
      y,
      b
    ] = reactExports.useState(!1),
    C = `${ CLOUDFRONT_URL }/series-${ l._id }-vertical.jpg`;
  const [minDifficulty, maxDifficulty] = seriesDifficultyRange(s.seriesDataItem);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement(
      'div',
      {
        className: 'ds-series-card',
        onClick: T => m(T)
      },
      reactExports.createElement(
        Image$1,
        {
          type: 'lazy',
          src: C,
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
      reactExports.createElement(
        'div',
        {
          className: 'ds-badge ds-badge--sm ds-badge--gray-80 ds-video-thumbnail__badge ds-video-thumbnail__badge--vocab-range',
        },
        reactExports.createElement(
          IconMoon,
          {
            style: {
              height: '10px',
              width: '10px',
              'margin-right': '0.25rem'
            },
            icon: 'thick-difficulty'
          }
        ),
        `${minDifficulty}-${maxDifficulty}`
      ),
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
