VideoCard = (u) => {
  const {
    video: l,
    userState: p,
    watchedVideos: m,
    playlistItems: y,
    showDifficulty: b
  }
    = u;
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement(
      'div',
      {
        'data-video-id': l._id,
        className: `ds-video-card ${ l.private ? 'ds-video-card--premium' : '' }`
      },
      reactExports.createElement(VideoThumbnail, {
        video: l,
        watchedVideos: m,
        showDifficulty: b
      }),
      reactExports.createElement(
        'div',
        {
          className: 'ds-video-card__content'
        },
        reactExports.createElement(
          'div',
          {
            className: 'ds-video-card__header'
          },
          reactExports.createElement(
            'p',
            {
              className: 'ds-video-card__title',
              'data-testid': 'video-card-title'
            },
            l.title
          ),
          reactExports.createElement(
            VideoOptions,
            {
              video: l,
              userState: p,
              watchedVideos: m,
              playlistItems: y,
              cssClass: 'ds-video-card__video-options'
            }
          )
        ),
        reactExports.createElement(
          'div',
          {
            className: 'ds-video-card__footer'
          },
          reactExports.createElement(
            'div',
            {
              className: 'ds-video-card__badges'
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
