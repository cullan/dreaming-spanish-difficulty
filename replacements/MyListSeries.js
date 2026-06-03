MyListSeries = (s) => {
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
      N,
      O
    ] = reactExports.useState(),
    [
      U,
      L
    ] = reactExports.useState(),
    G = reactExports.useMemo(
      () => !m.isFetched ||
        !m.data ||
        !b ? [] : m.data.filter(V => !!V.seriesId).map(V => b[V.seriesId]).filter(V => !!V),
      [
        m.isFetched,
        m.data,
        b
      ]
    ),
    M = reactExports.useCallback(V => {
      O(V),
      L(C?.[V._id]),
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
          elements: G,
          max: 10,
          onClick: M,
          onRender: V => {
            const Z = `${ CLOUDFRONT_URL }/series-${ V._id }-vertical.jpg`,
              H = C?.[V._id];
            const [minDifficulty, maxDifficulty] = seriesDifficultyRange(H);
            return reactExports.createElement(
              'div',
              {
                className: 'ds-my-list-series__card',
                'data-testid': 'library-series-card'
              },
              reactExports.createElement(
                Image$1,
                {
                  type: 'lazy',
                  src: Z,
                  alt: V.title,
                  className: 'ds-my-list-series__image'
                }
              ),
              !H?.locked &&
                reactExports.createElement('div', {
                  className: 'ds-my-list-series__overlay'
                }),
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
              H?.locked &&
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
    N &&
      U &&
      reactExports.createElement(
        SeriesModal,
        {
          show: T,
          series: N,
          seriesDataItem: U,
          closeCallback: () => R(!1)
        }
      )
  )
}
