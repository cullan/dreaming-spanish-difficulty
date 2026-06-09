SeriesCard = ({
  series,
  seriesDataItem,
  onClick = () => {},
  cardClass = 'ds-series-card',
  imageClass = 'ds-series-card__image',
  overlayClass = 'ds-series-card__overlay',
  titleOverlayClass = 'ds-series-card__title-overlay',
  artworkType = 'lazy',
  artworkLoading = 'lazy',
}) => {
  const [ showTitleOverlay, setShowTitleOverlay ] = reactExports.useState(false);
  const card = reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement(
      'div',
      {
        className: cardClass,
        style: { height: 'calc(100% - 4px - 0.3rem)' },
        onClick: C => onClick(C)
      },
      reactExports.createElement(
        SeriesArtwork,
        {
          type: artworkType,
          loading: artworkLoading,
          series: series,
          kind: 'vertical',
          alt: series.title,
          className: imageClass,
          onLoad: () => setShowTitleOverlay(false),
          onError: () => setShowTitleOverlay(true)
        }
      ),
      reactExports.createElement('div', { className: overlayClass }),
      showTitleOverlay &&
        reactExports.createElement('div', {
          className: titleOverlayClass
        }, series.title),
      reactExports.createElement(SeriesDifficultyBadgeOverlay, { episodes: seriesDataItem.episodes }),
      seriesDataItem.locked &&
        reactExports.createElement(
          'div',
          {
            className: 'ds-series-card__premium-overlay'
          },
          reactExports.createElement(
            IconMoon,
            {
              className: 'ds-series-card__premium-icon',
              icon: 'thick-lock'
            }
          )
        )
    )
  );
  return reactExports.createElement(
    SeriesProgressBar,
    {
      episodes: seriesDataItem.episodes,
      child: card
    }
  );
};
