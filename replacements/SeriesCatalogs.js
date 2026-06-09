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
          slideClass: 'ds-series-catalog__slide extension-series-wrapper',
          elements: R,
          onClick: D,
          onRender: (O, q, P, G) => {
            const J = m[O._id];
            return reactExports.createElement(
              SeriesCard,
              {
                series: O,
                seriesDataItem: J,
                cardClass: 'ds-series-catalog__card',
                imageClass: 'ds-series-catalog__image',
                overlayClass: 'ds-series-catalog__overlay',
                artworkType: q < P + 2 * Math.ceil(G) ? 'standard' : 'lazy',
                artworkLoading: q < P + 2 * Math.ceil(G) ? 'eager' : 'lazy',
              }
            );
          }
        }
      )
    )
  )
};
