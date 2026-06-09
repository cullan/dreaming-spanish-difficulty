SeriesContinueWatching = (u) => {
  const {
    series: l,
    seriesDataItems: p,
    watchedVideos: m
  }
    = u,
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
      F => {
        console.log(
          'going to',
          getUrl({
            path: WATCH,
            language: y,
            params: {
              series: F._id
            }
          })
        ),
        b.push(getUrl({
          path: WATCH,
          language: y,
          params: {
            series: F._id
          }
        }))
      },
      [
        b,
        y
      ]
    ),
    D = reactExports.useCallback(F => {
      T(O => ({
        ...O,
        [
          F
        ]: !1
      }))
    }, []),
    N = reactExports.useCallback(F => {
      T(O => ({
        ...O,
        [
          F
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
        onRender: (F, O, q, P) => {
          const G = p[F._id];
          return P === void 0 ? reactExports.createElement(reactExports.Fragment, null) : reactExports.createElement(
            reactExports.Fragment,
            null,
            reactExports.createElement(
              'div',
              {
                className: 'ds-series-continue-watching__card'
              },
              reactExports.createElement(
                SeriesArtwork,
                {
                  type: O < q + 2 * Math.ceil(P) ? 'standard' : 'lazy',
                  series: F,
                  kind: 'horizontal',
                  alt: F.title,
                  className: 'ds-series-continue-watching__image',
                  loading: O < q + 2 * Math.ceil(P) ? 'eager' : 'lazy',
                  onLoad: () => D(F._id),
                  onError: () => N(F._id)
                }
              ),
              reactExports.createElement('div', {
                className: 'ds-series-continue-watching__overlay'
              }),
              C[F._id] &&
                reactExports.createElement(
                  'div',
                  {
                    className: 'ds-series-continue-watching__title-overlay'
                  },
                  F.title
                ),
              G?.locked &&
                !C[F._id] &&
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
              !G?.locked &&
                !C[F._id] &&
                reactExports.createElement(
                  'button',
                  {
                    type: 'button',
                    className: 'ds-series-continue-watching__play-button',
                    'aria-label': `Reproducir ${ F.title }`
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
              G?.episodes.map(
                (J, $) => {
                  const K = m[J._id],
                    Q = percentage(J.duration - (J.endCutout ?? 0), K?.watchPosition ?? 0);
                  return reactExports.createElement(
                    ProgressBar$1,
                    {
                      key: J._id,
                      className: `ds-progress-bar ds-progress-bar--no-border ds-progress-bar--success
                        
                        ${ $ === 0 ? 'ds-progress-bar--border-left' : '' }
                        
                        ${ $ === G.episodes.length - 1 ? 'ds-progress-bar--border-right' : '' }
                      
                        `,
                      now: Q
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
};
