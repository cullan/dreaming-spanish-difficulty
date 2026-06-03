SeriesModal = (s) => {
  const {
    show: l,
    series: p,
    seriesDataItem: m,
    closeCallback: y
  }
    = s,
    {
      getColor: b
    }
      = useColorMode(),
    C = b({
      light: 0,
      dark: 100
    }),
    {
      language: T,
      languageName: R
    }
      = useLanguage(),
    N = useUserState(),
    O = useGetAllPlaylist({
      language: T
    }),
    U = useGetAllWatchedVideos({
      language: T
    }),
    L = useAddToPlaylist(),
    G = useDeleteFromPlaylist({
      language: T
    }),
    [
      M,
      V
    ] = reactExports.useState(!1),
    [
      Z,
      H
    ] = reactExports.useState(!1),
    Q = reactExports.useCallback(
      gr => {
        L.mutate({
          seriesId: gr._id,
          addedDate: new Date,
          language: T
        }),
        actionToast$.next({
          type: 'success',
          content: 'Added to my list.'
        })
      },
      [
        L,
        T
      ]
    ),
    J = reactExports.useCallback(
      gr => {
        G.mutate(gr),
        actionToast$.next({
          type: 'error',
          content: 'Removed from my list.'
        })
      },
      [
        G
      ]
    );
  reactExports.useEffect(() => {
    l ? V(!0) : (V(!1), H(!1))
  }, [
    l
  ]),
    reactExports.useEffect(
      () => {
        if (Z) {
          const gr = setTimeout(() => y(), 200);
          return () => clearTimeout(gr)
        }
      },
      [
        Z,
        y
      ]
    );
  const [minDifficulty, maxDifficulty] = seriesDifficultyRange(m);
  const ee = `${ CLOUDFRONT_URL }/series-${ p._id }-cover.jpg`,
    oe = `${ CLOUDFRONT_URL }/series-${ p._id }-horizontal.jpg`,
    Ve = O.data?.find(gr => gr.seriesId === p._id),
    Ut = !Ve,
    Vt = !!Ve;
  let tr = 0,
    Y = 0,
    Xt = m.episodes.slice(),
    er = 0;
  Xt.forEach(
    gr => {
      if (tr += gr.duration - (gr.endCutout ?? 0), !U.data) return;
      const or = U.data[gr._id];
      or &&
        (Y += or.watched ? gr.duration - (gr.endCutout ?? 0) : or.watchPosition)
    }
  );
  const cr = Xt.length;
  p.numberOfEpisodes > cr &&
    (er = p.numberOfEpisodes - cr);
  const sr = percentage(100, Y / tr * 100, !0),
    ar = reactExports.createElement(
      reactExports.Fragment,
      null,
      reactExports.createElement(
        Image$1,
        {
          type: 'lazy',
          src: ee,
          alt: p.title,
          className: 'ds-series-modal__cover'
        }
      ),
      reactExports.createElement('div', {
        className: 'ds-series-modal__overlay'
      }),
      reactExports.createElement(
        'div',
        {
          className: 'ds-series-modal__caption'
        },
        reactExports.createElement('h1', {
          className: 'ds-series-modal__title'
        }, p.title),
        reactExports.createElement(
          'div',
          {
            className: 'ds-series-modal__information'
          },
          reactExports.createElement(
            'div',
            {
              className: `ds-badge ds-badge--sm ds-video-card__badge ds-badge--level-${ p.level }-special`
            },
            reactExports.createElement(
              LevelIcon,
              {
                level: p.level,
                className: 'ds-badge__image ds-badge__image--sm ds-badge__image--left'
              }
            ),
            reactExports.createElement('span', {
              className: 'ds-text-capitalize-first'
            }, p.level)
          ),
          reactExports.createElement(
            'p',
            {
              className: 'ds-series-modal__information-label'
            },
            reactExports.createElement(
              IconMoon,
              {
                className: 'ds-series-modal__information-icon',
                style: {'margin-right': '0.25rem'},
                icon: 'thick-difficulty'
              }
            ),
            `${minDifficulty}-${maxDifficulty}`,
          ),
          reactExports.createElement(
            IconMoon,
            {
              className: 'ds-series-modal__information-icon',
              icon: 'thick-time'
            }
          ),
          reactExports.createElement(
            'p',
            {
              className: 'ds-series-modal__information-label'
            },
            Xt.length,
            ' Episode(s) • ',
            secondsToHM(m.duration)
          )
        ),
        reactExports.createElement(
          'div',
          {
            className: 'ds-series-modal__doughnut'
          },
          reactExports.createElement(
            'p',
            {
              className: 'ds-series-modal__doughnut-progress'
            },
            sr,
            '%',
            reactExports.createElement(
              'small',
              {
                className: 'ds-series-modal__doughnut-label'
              },
              'watched'
            )
          ),
          reactExports.createElement(
            DoughnutChart,
            {
              progress: sr,
              backgroundColor: alpha(C, 0.2),
              progressColor: C
            }
          )
        ),
        reactExports.createElement(
          'div',
          {
            className: 'ds-series-modal__buttons'
          },
          reactExports.createElement(
            Link,
            {
              to: getUrl({
                path: WATCH,
                language: T,
                params: {
                  series: p._id
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
          Ut &&
            reactExports.createElement(
              'button',
              {
                type: 'button',
                className: 'btn ds-button ds-button--lg ds-button--white',
                onClick: () => Q(p)
              },
              reactExports.createElement(
                IconMoon,
                {
                  className: 'ds-button__icon ds-button__icon--left ds-button__icon--lg ds-button__icon--success',
                  icon: 'thick-add-playlist',
                  'aria-hidden': 'true'
                }
              ),
              'Add to my list'
            ),
          Vt &&
            reactExports.createElement(
              'button',
              {
                type: 'button',
                className: 'btn ds-button ds-button--lg ds-button--white',
                onClick: () => Ve &&
                  J(Ve)
              },
              reactExports.createElement(
                IconMoon,
                {
                  className: 'ds-button__icon ds-button__icon--left ds-button__icon--lg ds-button__icon--error',
                  icon: 'thick-remove-playlist'
                }
              ),
              'Remove from my list'
            )
        )
      )
    ),
    zt = reactExports.createElement(
      reactExports.Fragment,
      null,
      reactExports.createElement(
        'div',
        {
          className: 'ds-series-modal__progress'
        },
        reactExports.createElement(
          'p',
          {
            className: 'ds-series-modal__progress-label'
          },
          sr,
          '% watched'
        ),
        reactExports.createElement(
          ProgressBar$1,
          {
            className: 'ds-progress-bar ds-progress-bar--secondary',
            now: sr
          }
        )
      ),
      reactExports.createElement('p', {
        className: 'ds-series-modal__description'
      }, p.description),
      reactExports.createElement(
        'div',
        {
          className: 'ds-series-modal__grid'
        },
        Xt.map(
          gr => !N.data ||
            !U.data ||
            !O.data ? reactExports.createElement('div', {
              key: gr._id
          }) : reactExports.createElement(
            'div',
            {
              key: gr._id,
              className: 'ds-series-modal__video'
            },
            reactExports.createElement(
              Link,
              {
                to: buildLinkTo$1(p, gr)
              },
              reactExports.createElement(
                EpisodeCard,
                {
                  video: gr,
                  userState: N.data,
                  watchedVideos: U.data,
                  playlistItems: O.data,
                  showDifficulty: !1
                }
              )
            )
          )
        ),
        lodashExports.times(er).map(
          gr => reactExports.createElement(
            'div',
            {
              key: gr,
              className: 'ds-series-modal__video'
            },
            reactExports.createElement(
              ComingSoonCard,
              {
                episodeNumber: gr + 1 + Xt.length,
                thumbnailUrl: oe
              }
            )
          )
        )
      )
    );
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    l &&
      reactExports.createElement(
        HelmetExport,
        null,
        reactExports.createElement('title', null, p.title),
        reactExports.createElement('meta', {
          name: 'description',
          content: p.description
        }),
        reactExports.createElement(
          'meta',
          {
            property: 'og:url',
            content: `https://app.dreaming.com/${ R.toLowerCase() }/series?id=${ p._id }`
          }
        ),
        reactExports.createElement('meta', {
          property: 'og:title',
          content: p.title
        }),
        reactExports.createElement('meta', {
          property: 'og:description',
          content: p.description
        }),
        reactExports.createElement(
          'meta',
          {
            property: 'og:image',
            content: `${ CLOUDFRONT_URL }/series-${ p._id }-horizontal.jpg`
          }
        ),
        reactExports.createElement(
          'link',
          {
            rel: 'canonical',
            href: `https://app.dreaming.com/${ R.toLowerCase() }/series?id=${ p._id }`
          }
        )
      ),
    reactExports.createElement(
      Modal,
      {
        className: 'ds-modal ds-series-modal',
        backdropClassName: 'ds-series-modal--backdrop',
        show: l,
        onHide: () => y()
      },
      reactExports.createElement(
        Modal.Header,
        {
          className: 'ds-modal__header'
        },
        ar,
        reactExports.createElement(
          'button',
          {
            type: 'button',
            className: 'ds-modal__close-button',
            onClick: () => y(),
            'aria-label': 'Close modal'
          },
          reactExports.createElement(IconMoon, {
            className: 'ds-modal__close',
            icon: 'line-close'
          })
        )
      ),
      reactExports.createElement(Modal.Body, {
        className: 'ds-modal__body'
      }, zt)
    ),
    l &&
      reactExports.createElement(
        'div',
        {
          className: `ds-series-modal ds-series-modal--mobile ds-animation
            
          ${ M ? ' ds-fade-in-right' : '' }
            
          ${ Z ? ' ds-fade-out-right' : '' }
          
          `,
          role: 'dialog',
          'data-testid': 'series-modal-mobile'
        },
        reactExports.createElement(
          'div',
          {
            className: 'ds-series-modal__header'
          },
          ar,
          reactExports.createElement(
            'button',
            {
              type: 'button',
              className: 'ds-series-modal__close-button',
              onClick: () => H(!0),
              'aria-label': 'Close modal'
            },
            reactExports.createElement(
              IconMoon,
              {
                className: 'ds-series-modal__close',
                icon: 'line-close'
              }
            )
          )
        ),
        reactExports.createElement('div', {
          className: 'ds-series-modal__body'
        }, zt)
      )
  )
}
