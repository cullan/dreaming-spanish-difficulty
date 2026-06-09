SeriesModal = (u) => {
  const {
    show: l,
    series: p,
    seriesDataItem: m,
    closeCallback: y
  }
    = u,
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
    D = useUserState(),
    N = useGetAllPlaylist({
      language: T
    }),
    F = useGetAllWatchedVideos({
      language: T
    }),
    O = useAddToPlaylist(),
    q = useDeleteFromPlaylist({
      language: T
    }),
    [
      P,
      G
    ] = reactExports.useState(!1),
    [
      J,
      $
    ] = reactExports.useState(!1),
    K = reactExports.useCallback(
      ir => {
        O.mutate({
          seriesId: ir._id,
          addedDate: new Date,
          language: T
        }),
        actionToast$.next({
          type: 'success',
          content: 'Added to my list.'
        })
      },
      [
        O,
        T
      ]
    ),
    Q = reactExports.useCallback(
      ir => {
        q.mutate(ir),
        actionToast$.next({
          type: 'error',
          content: 'Removed from my list.'
        })
      },
      [
        q
      ]
    );
  reactExports.useEffect(() => {
    l ? G(!0) : (G(!1), $(!1))
  }, [
    l
  ]),
    reactExports.useEffect(
      () => {
        if (J) {
          const ir = setTimeout(() => y(), 200);
          return () => clearTimeout(ir)
        }
      },
      [
        J,
        y
      ]
    );
  const Z = N.data?.find(ir => ir.seriesId === p._id),
    ne = !Z,
    oe = !!Z;
  let Qe = 0,
    zt = 0,
    Jt = m.episodes.slice(),
    z = 0;
  Jt.forEach(
    ir => {
      if (Qe += ir.duration - (ir.endCutout ?? 0), !F.data) return;
      const Vt = F.data[ir._id];
      Vt &&
        (
          zt += Vt.watched ? ir.duration - (ir.endCutout ?? 0) : Vt.watchPosition
        )
    }
  );
  const Qt = Jt.length;
  p.numberOfEpisodes > Qt &&
    (z = p.numberOfEpisodes - Qt);
  const er = percentage(100, zt / Qe * 100, !0),
    cr = reactExports.createElement(
      reactExports.Fragment,
      null,
      reactExports.createElement(
        SeriesArtwork,
        {
          type: 'lazy',
          series: p,
          kind: 'cover',
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
          reactExports.createElement(LevelBadge, {
            level: p.level
          }),
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
            Jt.length,
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
            er,
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
              progress: er,
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
          ne &&
            reactExports.createElement(
              'button',
              {
                type: 'button',
                className: 'btn ds-button ds-button--lg ds-button--white',
                onClick: () => K(p)
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
          oe &&
            reactExports.createElement(
              'button',
              {
                type: 'button',
                className: 'btn ds-button ds-button--lg ds-button--white',
                onClick: () => Z &&
                  Q(Z)
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
    sr = reactExports.createElement(
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
          er,
          '% watched'
        ),
        reactExports.createElement(
          ProgressBar$1,
          {
            className: 'ds-progress-bar ds-progress-bar--secondary',
            now: er
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
        Jt.map(
          ir => !D.data ||
            !F.data ||
            !N.data ? reactExports.createElement('div', {
              key: ir._id
          }) : reactExports.createElement(
            'div',
            {
              key: ir._id,
              className: 'ds-series-modal__video'
            },
            reactExports.createElement(
              Link,
              {
                to: buildLinkTo$1(p, ir)
              },
              reactExports.createElement(
                EpisodeCard,
                {
                  video: ir,
                  userState: D.data,
                  watchedVideos: F.data,
                  playlistItems: N.data,
                  showDifficulty: !1
                }
              )
            )
          )
        ),
        lodashExports.times(z).map(
          ir => reactExports.createElement(
            'div',
            {
              key: ir,
              className: 'ds-series-modal__video'
            },
            reactExports.createElement(ComingSoonCard, {
              episodeNumber: ir + 1 + Jt.length,
              series: p
            })
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
            content: getSeriesArtworkUrl(p._id, 'horizontal')
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
        cr,
        reactExports.createElement(
          'button',
          {
            type: 'button',
            className: 'ds-modal__close-button',
            onClick: () => y(),
            'aria-label': 'Close modal'
          },
          reactExports.createElement(
            IconMoon,
            {
              className: 'ds-modal__close-icon',
              icon: 'line-close'
            }
          )
        )
      ),
      reactExports.createElement(Modal.Body, {
        className: 'ds-modal__body'
      }, sr)
    ),
    l &&
      reactExports.createElement(
        'div',
        {
          className: `ds-series-modal ds-series-modal--mobile ds-animation
            
          ${ P ? ' ds-fade-in-right' : '' }
            
          ${ J ? ' ds-fade-out-right' : '' }
          
          `,
          role: 'dialog',
          'data-testid': 'series-modal-mobile'
        },
        reactExports.createElement(
          'div',
          {
            className: 'ds-series-modal__header'
          },
          cr,
          reactExports.createElement(
            'button',
            {
              type: 'button',
              className: 'ds-series-modal__close-button',
              onClick: () => $(!0),
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
        }, sr)
      )
  )
};
