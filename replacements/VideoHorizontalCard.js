VideoHorizontalCard = (u) => {
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
    = u,
    {
      matches: {
        maxWidth991: D
      }
    }
      = useMediaQueries({
        maxWidth991: '(max-width: 991px)'
    }),
    N = C ||
      D,
    F = l.publishedAt ? new Date(l.publishedAt) : void 0;
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
            reactExports.createElement(LevelBadge, {
              level: l.level,
              hideLabel: N
            }),
            l.private &&
              reactExports.createElement(
                Badge,
                {
                  variant: 'secondary-alternative',
                  size: 'sm',
                  startIcon: 'thick-star'
                },
                reactExports.createElement('span', {
                  className: N ? 'sr-only' : void 0
                }, 'Premium')
              ),
            (l.tags.includes('+18') || l.tags.includes('18+')) &&
              reactExports.createElement(Badge, {
                variant: 'error-alternative',
                size: C ? 'xs' : 'sm'
              }, '18+')
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
              
                `,
              title: l.title
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
            F &&
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
              dateToYYMMDD(F)
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
};
