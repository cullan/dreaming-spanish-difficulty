VideoHorizontalCard = (s) => {
  const {
    video: l,
    userState: p,
    watchedVideos: m,
    playlistItems: y,
    showDifficulty: b,
    compact: C,
    lastWatched: T,
    options: R
  }
    = s,
    N = l.publishedAt ? new Date(l.publishedAt) : void 0;
  const difficulty = calculateDifficulty(l.difficultyScore || 0);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement(
      'div',
      {
        'data-video-id': l._id,
        className: `ds-video-horizontal-card ${ l.private ? 'ds-video-horizontal-card--premium' : '' }`
      },
      reactExports.createElement(VideoThumbnail, {
        video: l,
        watchedVideos: m,
        showDifficulty: b
      }),
      reactExports.createElement(
        'div',
        {
          className: `ds-video-horizontal-card__content 
            
            ${ C ? 'ds-video-horizontal-card__content--compact' : '' }
          
            `
        },
        reactExports.createElement(
          'div',
          {
            className: 'ds-video-horizontal-card__header'
          },
          reactExports.createElement(
            'div',
            {
              className: 'ds-video-horizontal-card__header-group'
            },
            reactExports.createElement(
              'div',
              {
                className: `ds-badge ds-badge--sm ds-video-horizontal-card__badge 
                ds-badge--level-${ l.level }-special
                  `
              },
              reactExports.createElement(
                LevelIcon,
                {
                  level: l.level,
                  className: `ds-badge__image ds-badge__image--sm 
                    
                    ${ C ? '' : 'ds-badge__image--left' }
                  
                    `
                }
              ),
              !C &&
                reactExports.createElement(
                  'p',
                  {
                    className: 'ds-video-horizontal-card__badge-label ds-text-capitalize-first'
                  },
                  l.level
                )
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
                  className: 'ds-badge ds-badge--sm ds-badge--secondary-alternative ds-video-horizontal-card__badge'
                },
                reactExports.createElement(
                  IconMoon,
                  {
                    className: `ds-badge__icon ds-badge__icon--sm ${ C ? '' : 'ds-badge__icon--left' }`,
                    icon: 'thick-star'
                  }
                ),
                !C &&
                  reactExports.createElement(
                    'p',
                    {
                      className: 'ds-video-horizontal-card__badge-label'
                    },
                    'Premium'
                  )
              ),
            (l.tags.includes('+18') || l.tags.includes('18+')) &&
              reactExports.createElement(
                'div',
                {
                  className: 'ds-badge ds-badge--sm ds-badge--error-alternative ds-video-horizontal-card__badge ds-video-horizontal-card__badge--18'
                },
                '18+'
              )
          ),
          reactExports.createElement(
            VideoOptions,
            {
              video: l,
              userState: p,
              watchedVideos: m,
              playlistItems: y,
              options: R,
              cssClass: `ds-video-horizontal-card__video-options 
                
                ${ C ? 'ds-video-horizontal-card__video-options--compact' : '' }
              
                `
            }
          )
        ),
        reactExports.createElement(
          'div',
          {
            className: 'ds-video-horizontal-card__footer'
          },
          reactExports.createElement(
            'p',
            {
              className: `ds-video-horizontal-card__title 
                
                ${ C ? 'ds-video-horizontal-card__title--compact' : '' }
              
                `
            },
            l.title
          ),
          !C &&
            l.description &&
            reactExports.createElement(
              'p',
              {
                className: 'ds-video-horizontal-card__description'
              },
              l.description
            ),
          !C &&
            N &&
            !T &&
            reactExports.createElement(
              'p',
              {
                className: 'ds-video-horizontal-card__published-on'
              },
              reactExports.createElement(
                IconMoon,
                {
                  className: 'ds-video-horizontal-card__published-on-icon',
                  icon: 'thick-calendar'
                }
              ),
              'Published on: ',
              dateToYYMMDD(N)
            ),
          !C &&
            T &&
            reactExports.createElement(
              'p',
              {
                className: 'ds-video-horizontal-card__watched-on'
              },
              reactExports.createElement(
                IconMoon,
                {
                  className: 'ds-video-horizontal-card__watched-on-icon',
                  icon: 'thick-calendar'
                }
              ),
              'Watched on: ',
              dateToYYMMDD(T),
              ', ',
              dateToAMPM(T)
            )
        )
      )
    )
  )
}
