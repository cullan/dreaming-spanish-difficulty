CatalogVideoCard = (u) => {
  const {
    video: l,
    userState: p,
    watchedVideos: m,
    playlistItems: y
  }
    = u;
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement(
      'div',
      {
        className: `ds-catalog-video-card ${ l.private ? 'ds-catalog-video-card--premium' : '' }`,
        'data-testid': 'catalog-video-card'
      },
      reactExports.createElement(VideoThumbnail, {
        video: l,
        watchedVideos: m,
        showDifficulty: !1
      }),
      reactExports.createElement(
        'div',
        {
          className: 'ds-catalog-video-card__content'
        },
        reactExports.createElement(
          'div',
          {
            className: 'ds-catalog-video-card__header'
          },
          reactExports.createElement('p', {
            className: 'ds-catalog-video-card__title'
          }, l.title),
          reactExports.createElement(
            VideoOptions,
            {
              video: l,
              userState: p,
              watchedVideos: m,
              playlistItems: y,
              cssClass: 'ds-catalog-video-card__video-options'
            }
          )
        ),
        reactExports.createElement(
          'div',
          {
            className: 'ds-catalog-video-card__footer'
          },
          reactExports.createElement(
            'div',
            {
              className: 'ds-catalog-video-card__badges'
            },
            reactExports.createElement(LevelBadge, {
              level: l.level
            }),
            reactExports.createElement(VideoDifficultyBadge, { difficultyScore: l.difficultyScore }),
            l.private &&
              reactExports.createElement(
                Badge,
                {
                  variant: 'secondary',
                  size: 'sm',
                  startIcon: 'thick-star'
                },
                'Premium'
              ),
            (l.tags.includes('+18') || l.tags.includes('18+')) &&
              reactExports.createElement(Badge, {
                variant: 'error-alternative',
                size: 'sm'
              }, '18+')
          )
        )
      )
    )
  )
};
