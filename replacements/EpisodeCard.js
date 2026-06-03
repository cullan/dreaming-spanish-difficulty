EpisodeCard = (s) => {
  const {
    video: l,
    userState: p,
    watchedVideos: m,
    playlistItems: y,
    showDifficulty: b
  }
    = s;
  const difficulty = calculateDifficulty(l.difficultyScore || 0);
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
            reactExports.createElement(
              'div',
              {
                className: 'ds-badge ds-badge--sm ds-badge--alternative'
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
              difficulty,
            ),
            l.private &&
              reactExports.createElement(
                'div',
                {
                  className: 'ds-badge ds-badge--sm ds-badge--secondary'
                },
                reactExports.createElement(
                  IconMoon,
                  {
                    className: 'ds-badge__icon ds-badge__icon--sm ds-badge__icon--left',
                    icon: 'thick-star'
                  }
                ),
                'Premium'
              ),
            (l.tags.includes('+18') || l.tags.includes('18+')) &&
              reactExports.createElement(
                'div',
                {
                  className: 'ds-badge ds-badge--sm ds-badge--error-alternative'
                },
                '18+'
              )
          )
        )
      )
    )
  )
}
