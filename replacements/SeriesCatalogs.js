SeriesCatalog = (s) => {
  const {
    level: l,
    series: p,
    seriesDataItems: m
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
    R = reactExports.useMemo(
      () => l ? p.filter(L => L.level === l).sort((L, G) => G.publishedAt.localeCompare(L.publishedAt)) : p,
      [
        l,
        p
      ]
    ),
    N = reactExports.useCallback(
      L => {
        b.push(getUrl({
          path: SERIES,
          language: y,
          params: {
            id: L._id
          }
        }))
      },
      [
        b,
        y
      ]
    ),
    O = reactExports.useCallback(L => {
      T(G => ({
        ...G,
        [
          L
        ]: !1
      }))
    }, []),
    U = reactExports.useCallback(L => {
      T(G => ({
        ...G,
        [
          L
        ]: !0
      }))
    }, []);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement(
      'div',
      {
        className: 'ds-series-catalog'
      },
      reactExports.createElement(
        Carousel,
        {
          showHeader: !0,
          title: `${ l } series`,
          link: getUrl({
            path: `${ SERIES }/${ l }`,
            language: y
          }),
          slideClass: 'ds-series-catalog__slide',
          elements: R,
          onClick: N,
          onRender: (L, G, M, V) => {
            const Z = `${ CLOUDFRONT_URL }/series-${ L._id }-vertical.jpg`,
              H = m[L._id];
            const [minDifficulty, maxDifficulty] = seriesDifficultyRange(H);
            return V === void 0 ? reactExports.createElement(reactExports.Fragment, null) : reactExports.createElement(
              'div',
              {
                className: 'ds-series-catalog__card',
                'data-testid': 'series-catalog-card'
              },
              reactExports.createElement(
                Image$1,
                {
                  type: G < M + 2 * Math.ceil(V) ? 'standard' : 'lazy',
                  src: Z,
                  alt: L.title,
                  className: 'ds-series-catalog__image',
                  loading: G < M + 2 * Math.ceil(V) ? 'eager' : 'lazy',
                  onLoad: () => O(L._id),
                  onError: () => U(L._id)
                }
              ),
              !H?.locked &&
                reactExports.createElement('div', {
                  className: 'ds-series-catalog__overlay'
                }),
              C[L._id] &&
                reactExports.createElement('div', {
                  className: 'ds-series-catalog__title-overlay'
                }, L.title),
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
              H?.locked &&
                reactExports.createElement(
                  'div',
                  {
                    className: 'ds-series-catalog__premium-overlay'
                  },
                  reactExports.createElement(
                    IconMoon,
                    {
                      className: 'ds-series-catalog__premium-icon',
                      icon: 'thick-lock'
                    }
                  )
                )
            )
          }
        }
      )
    )
  )
}
