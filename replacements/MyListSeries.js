MyListSeries = (u) => {
  const {
    language: l
  }
    = useLanguage(),
    p = useGetAllVideos({
      language: l
    }),
    m = useGetAllPlaylist({
      language: l
    }),
    y = usePremium({
      language: l
    }),
    [
      ,
      b,
      C
    ] = useProcessedSeries(y, p.data?.videos),
    [
      T,
      R
    ] = reactExports.useState(!1),
    [
      D,
      N
    ] = reactExports.useState(),
    [
      F,
      O
    ] = reactExports.useState(),
    q = reactExports.useMemo(
      () => !m.isFetched ||
        !m.data ||
        !b ? [] : m.data.filter(G => !!G.seriesId).map(G => b[G.seriesId]).filter(G => !!G),
      [
        m.isFetched,
        m.data,
        b
      ]
    ),
    P = reactExports.useCallback(G => {
      N(G),
      O(C?.[G._id]),
      R(!0)
    }, [
      C
    ]);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement(
      'div',
      {
        className: 'ds-my-list-series',
        'data-testid': 'library-series-section'
      },
      reactExports.createElement(
        Carousel,
        {
          showHeader: !0,
          icon: 'menu-series',
          title: 'My list: series',
          link: getUrl({
            path: `${ LIBRARY }/series`,
            language: l
          }),
          emptyMessage: 'Your list has no series.',
          slideClass: 'ds-my-list-series__slide',
          elements: q,
          max: 10,
          onClick: P,
          onRender: G => {
            const J = C?.[G._id];
            return reactExports.createElement(
              'div',
              {
                className: 'ds-my-list-series__card',
                'data-testid': 'library-series-card'
              },
              reactExports.createElement(
                SeriesArtwork,
                {
                  type: 'lazy',
                  series: G,
                  kind: 'vertical',
                  alt: G.title,
                  className: 'ds-my-list-series__image'
                }
              ),
              !J?.locked &&
                reactExports.createElement('div', {
                  className: 'ds-my-list-series__overlay'
                }),
              J?.locked &&
                reactExports.createElement(
                  'div',
                  {
                    className: 'ds-my-list-series__premium-overlay'
                  },
                  reactExports.createElement(
                    IconMoon,
                    {
                      className: 'ds-my-list-series__premium-icon',
                      icon: 'thick-lock'
                    }
                  )
                )
            )
          }
        }
      )
    ),
    D &&
      F &&
      reactExports.createElement(
        SeriesModal,
        {
          show: T,
          series: D,
          seriesDataItem: F,
          closeCallback: () => R(!1)
        }
      )
  )
};
