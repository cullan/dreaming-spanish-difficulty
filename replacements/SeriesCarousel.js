SeriesCarousel = (u) => {
  const {
    series: l,
    seriesDataItems: p
  }
    = u,
    {
      language: m
    }
      = useLanguage(),
    [
      y,
      b
    ] = reactExports.useState(0),
    C = reactExports.useMemo(() => l.length, [
      l.length
    ]);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement(
      'div',
      {
        className: 'ds-series-carousel'
      },
      reactExports.createElement(
        Slider,
        {
          className: 'ds-series-carousel__carousel',
          ...SETTINGS,
          beforeChange: (T, R) => {
            b(R)
          }
        },
        l.map(
          (T, R) => {
            const D = p[T._id],
              N = shouldLoadImage(R, y, C);
            return reactExports.createElement(
              Carousel$1.Item,
              {
                key: T._id,
                className: 'ds-series-carousel__slide'
              },
              reactExports.createElement(
                SeriesArtwork,
                {
                  type: N ? 'standard' : 'lazy',
                  series: T,
                  kind: 'cover',
                  alt: T.title,
                  className: 'ds-series-carousel__cover',
                  loading: N ? 'eager' : 'lazy'
                }
              ),
              reactExports.createElement('div', {
                className: 'ds-series-carousel__overlay'
              }),
              reactExports.createElement(
                Carousel$1.Caption,
                {
                  className: 'ds-series-carousel__caption'
                },
                reactExports.createElement('h1', {
                  className: 'ds-series-carousel__title'
                }, T.title),
                reactExports.createElement(
                  'div',
                  {
                    className: 'ds-series-carousel__information'
                  },
                  reactExports.createElement(LevelBadge, {
                    level: T.level
                  }),
                  reactExports.createElement(SeriesDifficultyBadge, { episodes: D.episodes }),
                  reactExports.createElement(
                    'div',
                    {
                      className: 'ds-series-carousel__information-duration'
                    },
                    reactExports.createElement(
                      IconMoon,
                      {
                        className: 'ds-series-carousel__information-duration-icon',
                        icon: 'thick-time'
                      }
                    ),
                    D &&
                      reactExports.createElement(
                        'p',
                        {
                          className: 'ds-series-carousel__information-duration-label'
                        },
                        D.episodes.length,
                        ' Episode(s) • ',
                        secondsToHM(D.duration)
                      )
                  )
                ),
                reactExports.createElement(
                  'p',
                  {
                    className: 'ds-series-carousel__description'
                  },
                  T.description
                ),
                reactExports.createElement(
                  'div',
                  {
                    className: 'ds-series-carousel__buttons'
                  },
                  reactExports.createElement(
                    Link,
                    {
                      to: getUrl({
                        path: WATCH,
                        language: m,
                        params: {
                          series: T._id
                        }
                      }),
                      className: 'btn ds-button ds-button--lg ds-button--primary'
                    },
                    reactExports.createElement(
                      IconMoon,
                      {
                        className: 'ds-button__icon ds-button__icon--left',
                        icon: 'thick-play'
                      }
                    ),
                    'Play'
                  ),
                  reactExports.createElement(
                    Link,
                    {
                      to: getUrl({
                        path: SERIES,
                        language: m,
                        params: {
                          id: T._id
                        }
                      }),
                      className: 'btn ds-button ds-button--lg ds-button--primary-alternative'
                    },
                    'More info'
                  )
                )
              )
            )
          }
        )
      )
    )
  )
};
