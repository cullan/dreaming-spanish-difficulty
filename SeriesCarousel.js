SeriesCarousel = (s) => {
  const {
    series: l,
    seriesDataItems: p
  }
    = s,
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
            const N = `${ CLOUDFRONT_URL }/series-${ T._id }-cover.jpg`,
              O = p[T._id],
              U = shouldLoadImage(R, y, C);
            const [minDifficulty, maxDifficulty] = seriesDifficultyRange(O);
            return reactExports.createElement(
              Carousel$1.Item,
              {
                key: T._id,
                className: 'ds-series-carousel__slide'
              },
              reactExports.createElement(
                Image$1,
                {
                  type: U ? 'standard' : 'lazy',
                  src: N,
                  alt: T.title,
                  className: 'ds-series-carousel__cover',
                  loading: U ? 'eager' : 'lazy'
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
                  reactExports.createElement(
                    'div',
                    {
                      className: `ds-badge ds-badge--sm ds-video-card__badge ds-badge--level-${ T.level }-special`
                    },
                    reactExports.createElement(
                      LevelIcon,
                      {
                        level: T.level,
                        className: 'ds-badge__image ds-badge__image--sm ds-badge__image--left'
                      }
                    ),
                    reactExports.createElement('span', {
                      className: 'ds-text-capitalize-first'
                    }, T.level)
                  ),
                  reactExports.createElement(
                    IconMoon,
                    {
                      className: 'ds-series-modal__information-icon',
                      style: {"margin-right": "-0.5rem"},
                      icon: 'thick-difficulty'
                    }
                  ),
                  `${minDifficulty}-${maxDifficulty}`,
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
                    O &&
                      reactExports.createElement(
                        'p',
                        {
                          className: 'ds-series-carousel__information-duration-label'
                        },
                        O.episodes.length,
                        ' Episode(s) • ',
                        secondsToHM(O.duration)
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
}
