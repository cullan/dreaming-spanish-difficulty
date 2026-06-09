SeriesCatalog = (u) => {
  const {
    level: l,
    series: p,
    seriesDataItems: m
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
    R = reactExports.useMemo(
      () => l ? p.filter(O => O.level === l).filter(isPublishedSeries).sort((O, q) => (q.publishedAt ?? '').localeCompare(O.publishedAt ?? '')) : p,
      [
        l,
        p
      ]
    ),
    D = reactExports.useCallback(
      O => {
        b.push(getUrl({
          path: SERIES,
          language: y,
          params: {
            id: O._id
          }
        }))
      },
      [
        b,
        y
      ]
    ),
    N = reactExports.useCallback(O => {
      T(q => ({
        ...q,
        [
          O
        ]: !1
      }))
    }, []),
    F = reactExports.useCallback(O => {
      T(q => ({
        ...q,
        [
          O
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
          onClick: D,
          onRender: (O, q, P, G) => {
            const J = m[O._id];
            return G === void 0 ? reactExports.createElement(reactExports.Fragment, null) : reactExports.createElement(
              'div',
              {
                className: 'ds-series-catalog__card',
                'data-testid': 'series-catalog-card'
              },
              reactExports.createElement(
                SeriesArtwork,
                {
                  type: q < P + 2 * Math.ceil(G) ? 'standard' : 'lazy',
                  series: O,
                  kind: 'vertical',
                  alt: O.title,
                  className: 'ds-series-catalog__image',
                  loading: q < P + 2 * Math.ceil(G) ? 'eager' : 'lazy',
                  onLoad: () => N(O._id),
                  onError: () => F(O._id)
                }
              ),
              !J?.locked &&
                reactExports.createElement('div', {
                  className: 'ds-series-catalog__overlay'
                }),
              C[O._id] &&
                reactExports.createElement('div', {
                  className: 'ds-series-catalog__title-overlay'
                }, O.title),
              J?.locked &&
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
};
