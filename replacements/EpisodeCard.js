EpisodeCard = (u) => {
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
        className: `ds-episode-card ${ l.private ? 'ds-episode-card--premium' : '' }`
      },
      reactExports.createElement(VideoThumbnail, {
        video: l,
        watchedVideos: m,
        showDifficulty: b
      }),
      reactExports.createElement(
        'div',
        {
          className: 'ds-episode-card__content'
        },
        reactExports.createElement(
          'div',
          {
            className: 'ds-episode-card__header'
          },
          reactExports.createElement(
            'p',
            {
              className: 'ds-episode-card__title'
            },
            'E',
            l.episodeNumber,
            reactExports.createElement('span', null, ': ', l.title)
          ),
          reactExports.createElement(
            VideoOptions,
            {
              video: l,
              userState: p,
              watchedVideos: m,
              playlistItems: y,
              cssClass: 'ds-episode-card__video-options'
            }
          )
        ),
        reactExports.createElement(
          'div',
          {
            className: 'ds-episode-card__footer'
          },
          reactExports.createElement('p', {
            className: 'ds-episode-card__description'
          }, l.description),
          reactExports.createElement(
            'div',
            {
              className: 'ds-episode-card__badges'
            },
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
