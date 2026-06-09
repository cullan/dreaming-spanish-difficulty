VideoThumbnail = (u) => {
  const {
    video: l,
    watchedVideos: p,
    showDifficulty: m
  }
    = u,
    [
      y,
      b
    ] = reactExports.useState(!1),
    C = `${ CLOUDFRONT_URL }/${ l._id }.jpg`,
    T = p[l._id],
    R = percentage(l.duration - (l.endCutout ?? 0), T?.watchPosition);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement(
      'div',
      {
        className: 'ds-video-thumbnail ds-animation ds-fade-in'
      },
      reactExports.createElement(
        Image$1,
        {
          type: 'standard',
          src: C,
          alt: 'thumbnail',
          className: 'ds-video-thumbnail__image'
        }
      ),
      !l.hasAccess &&
        reactExports.createElement(
          'div',
          {
            className: 'ds-video-thumbnail__premium-overlay'
          },
          reactExports.createElement(
            IconMoon,
            {
              className: 'ds-video-thumbnail__premium-icon',
              icon: 'thick-lock'
            }
          )
        ),
      m &&
        reactExports.createElement(
          Badge,
          {
            variant: 'overlay',
            size: 'xs',
            className: 'ds-video-thumbnail__badge ds-video-thumbnail__badge--vocab-range',
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1)
          },
          calculateDifficulty(l.difficultyScore)
        ),
      reactExports.createElement(
        'div',
        {
          className: `ds-video-thumbnail__vocab-tooltip
            
            ${ y ? ' ds-video-thumbnail__vocab-tooltip--visible' : '' }
          
            `
        },
        'Relative difficulty score from 0 to 100.'
      ),
      R > 0 &&
        reactExports.createElement(
          ProgressBar$1,
          {
            className: 'ds-progress-bar ds-progress-bar--error ds-video-thumbnail__progress-bar',
            now: R
          }
        ),
      l.duration > 0 &&
        reactExports.createElement(
          Badge,
          {
            variant: 'overlay',
            size: 'xs',
            className: 'ds-video-thumbnail__badge ds-video-thumbnail__badge--watched-duration',
            startIcon: T?.watched ? 'thick-checked' : void 0
          },
          T?.watched &&
            'Watched | ',
          durationToHHMMSS(l.duration - (l.endCutout ?? 0))
        )
    )
  )
};
