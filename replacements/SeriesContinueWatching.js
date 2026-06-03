SeriesContinueWatching = (s) => {
  const {
    series: l,
    seriesDataItems: p,
    watchedVideos: m
  }
    = s,
    {
      language: y
    }
      = useLanguage(),
    b = useHistory(),
    [
      C,
      T
    ] = reactExports.useState({
    }),
    R = reactExports.useCallback(
      U => {
        console.log(
          'going to',
          getUrl({
            path: WATCH,
            language: y,
            params: {
              series: U._id
            }
          })
        ),
        b.push(getUrl({
          path: WATCH,
          language: y,
          params: {
            series: U._id
          }
        }))
      },
      [
        b,
        y
      ]
    ),
    N = reactExports.useCallback(U => {
      T(L => ({
        ...L,
        [
          U
        ]: !1
      }))
    }, []),
    O = reactExports.useCallback(U => {
      T(L => ({
        ...L,
        [
          U
        ]: !0
      }))
    }, []);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement(
      Carousel,
      {
        showHeader: !0,
        title: 'Continue watching',
        slideClass: 'ds-series-continue-watching__slide',
        elements: l,
        onClick: R,
        onRender: (U, L, G, M) => {
          const V = `${ CLOUDFRONT_URL }/series-${ U._id }-horizontal.jpg`,
            Z = p[U._id];
          const [minDifficulty, maxDifficulty] = seriesDifficultyRange(Z);
          return M === void 0 ? reactExports.createElement(reactExports.Fragment, null) : reactExports.createElement(
            reactExports.Fragment,
            null,
            reactExports.createElement(
              'div',
              {
                className: 'ds-series-continue-watching__card'
              },
              reactExports.createElement(
                Image$1,
                {
                  type: L < G + 2 * Math.ceil(M) ? 'standard' : 'lazy',
                  src: V,
                  alt: U.title,
                  className: 'ds-series-continue-watching__image',
                  loading: L < G + 2 * Math.ceil(M) ? 'eager' : 'lazy',
                  onLoad: () => N(U._id),
                  onError: () => O(U._id)
                }
              ),
              reactExports.createElement('div', {
                className: 'ds-series-continue-watching__overlay'
              }),
              C[U._id] &&
                reactExports.createElement(
                  'div',
                  {
                    className: 'ds-series-continue-watching__title-overlay'
                  },
                  U.title
                ),
              Z?.locked &&
                !C[U._id] &&
                reactExports.createElement(
                  'div',
                  {
                    className: 'ds-series-continue-watching__premium-overlay'
                  },
                  reactExports.createElement(
                    IconMoon,
                    {
                      className: 'ds-series-continue-watching__premium-icon',
                      icon: 'thick-lock'
                    }
                  )
                ),
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
                ),`${minDifficulty}-${maxDifficulty}`
              ),
              !Z?.locked &&
                !C[U._id] &&
                reactExports.createElement(
                  'button',
                  {
                    type: 'button',
                    className: 'ds-series-continue-watching__play-button',
                    'aria-label': `Reproducir ${ U.title }`
                  },
                  reactExports.createElement(
                    IconMoon,
                    {
                      className: 'ds-series-continue-watching__play-icon',
                      icon: 'thick-play'
                    }
                  )
                )
            ),
            reactExports.createElement(
              'div',
              {
                className: 'ds-series-continue-watching__episode-progress'
              },
              Z?.episodes.map(
                (H, Q) => {
                  const J = m[H._id],
                    ee = percentage(H.duration - (H.endCutout ?? 0), J?.watchPosition ?? 0);
                  return reactExports.createElement(
                    ProgressBar$1,
                    {
                      key: H._id,
                      className: `ds-progress-bar ds-progress-bar--no-border ds-progress-bar--success
                        
                        ${ Q === 0 ? 'ds-progress-bar--border-left' : '' }
                        
                        ${ Q === Z.episodes.length - 1 ? 'ds-progress-bar--border-right' : '' }
                      
                        `,
                      now: ee
                    }
                  )
                }
              )
            )
          )
        }
      }
    )
  )
}
