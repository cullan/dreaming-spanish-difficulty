CatalogVideoCard = (s) => {
  const {
    video: l,
    userState: p,
    watchedVideos: m,
    playlistItems: y
  }
    = s;
  const difficulty = calculateDifficulty(l.difficultyScore || 0);
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
            reactExports.createElement(
              'div',
              {
                className: `ds-badge ds-badge--sm ds-badge--level-${ l.level }-special`
              },
              reactExports.createElement(
                LevelIcon,
                {
                  level: l.level,
                  className: 'ds-badge__image ds-badge__image--sm ds-badge__image--left'
                }
              ),
              reactExports.createElement('span', {
                className: 'ds-text-capitalize-first'
              }, l.level)
            ),
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
