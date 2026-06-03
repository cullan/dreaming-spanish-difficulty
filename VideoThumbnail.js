VideoThumbnail = (s) => {
  const {
    video: l,
    watchedVideos: p,
    showDifficulty: _m
  }
    = s,
    [
      y,
      b
    ] = reactExports.useState(!1),
    C = `${ CLOUDFRONT_URL }/${ l._id }.jpg`,
    T = p[l._id],
    R = percentage(l.duration - (l.endCutout ?? 0), T?.watchPosition);
  const m = true;
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
          'div',
          {
            className: 'ds-badge ds-badge--sm ds-badge--gray-80 ds-video-thumbnail__badge ds-video-thumbnail__badge--vocab-range',
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1)
          },
          reactExports.createElement(
            IconMoon,
            {
              style: {height: "10px", width: "10px", "margin-right": "0.25rem"},
              icon: "thick-difficulty"
            }
          ),
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
          'div',
          {
            className: 'ds-badge ds-badge--sm ds-badge--gray-80 ds-video-thumbnail__badge ds-video-thumbnail__badge--watched-duration'
          },
          reactExports.createElement(
            'div',
            {
              className: 'ds-video-thumbnail__badge-content'
            },
            T?.watched &&
              reactExports.createElement(
                reactExports.Fragment,
                null,
                reactExports.createElement(
                  IconMoon,
                  {
                    className: 'ds-video-thumbnail__badge-icon',
                    icon: 'thick-checked'
                  }
                ),
                reactExports.createElement('span', null, 'Watched'),
                reactExports.createElement('span', null, '|')
              ),
            reactExports.createElement('span', null, durationToHHMMSS(l.duration - (l.endCutout ?? 0)))
          )
        )
    )
  )
};
