function SeriesProgressBar({ episodes, child }) {
  const { language: language } = useLanguage();
  const watchedVideos = useGetAllWatchedVideos({ language });

  return reactExports.createElement(
    'div',
    {
      style: {
        'display': 'flex',
        'flex-direction': 'column',
        'height': '100%',
        'width': '100%',
        'justify-content': 'flex-end',
      }
    },
    child,
    reactExports.createElement(
      'div',
      {
        className: 'ds-series-continue-watching__episode-progress',
        style: { 'margin-top': '5px' }
      },
      episodes.map(
        (episode, i) => {
          const w = watchedVideos.data[episode._id],
            progress = percentage(episode.duration - (episode.endCutout ?? 0), w?.watchPosition ?? 0);
          return reactExports.createElement(
            ProgressBar$1,
            {
              key: episode._id,
              className: `ds-progress-bar ds-progress-bar--no-border ds-progress-bar--success
                        ${ i === 0 ? 'ds-progress-bar--border-left' : '' }
                        ${ i === episodes.length - 1 ? 'ds-progress-bar--border-right' : '' }
                        `,
              now: progress
            }
          )
        }
      )
    )
  );
}
