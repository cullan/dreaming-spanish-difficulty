VideoSection = (u) => {
  const {
    language: l,
    video: p,
    isFetchedVideo: m,
    offlineVideo: y,
    manifest: b,
    videoA: C,
    videoB: T,
    autoplaySeconds: R,
    autoplayCancelled: D,
    series: N,
    nextVideos: F,
    displayType: O,
    source: q,
    playerReference: P,
    showPlayer: G,
    showPlayNext: J,
    showOverlay: $,
    showComments: K,
    showPremiumMessage: Q,
    showBackgroundMessage: Z,
    showPlaylist: ne,
    onState: oe,
    onNextVideo: Qe,
    onShowPlayer: zt,
    onShowOverlay: Jt,
    onCancelPlayNext: z,
    onShowComments: Qt,
    onShowPremiumMessage: er,
    onShowBackgroundMessage: cr,
    onShowLoginModal: sr,
    onMarkVideoAsWatched: ir,
    onMarkVideoAsUnwatched: Vt
  }
    = u,
    mr = useHistory(),
    ar = useLocation(),
    {
      browseState: dr
    }
      = reactExports.useContext(BrowseStateContext),
    Ar = useOnline(),
    xr = useInstalled(),
    {
      dispatch: Sr
    }
      = useSession(),
    Tr = useUserState(),
    qt = useGetAllVideos({
      language: l
    }),
    gr = useGetAllWatchedVideos({
      language: l
    }),
    Nr = usePremium({
      language: l
    }),
    Ur = usePlaylistVideo({
      language: l
    }),
    [
      Yr,
      an
    ] = reactExports.useState(),
    [
      Vr,
      Zr
    ] = reactExports.useState(!1),
    Mr = reactExports.useMemo(
      () => {
        if (!(!m || !p || !N) && p.seriesId && O !== 'series') return N.find(Hn => Hn._id === p.seriesId)
      },
      [
        m,
        p,
        N,
        O
      ]
    );
  let In = 'embed-responsive-16by9';
  (!p || p.aspectRatio === '2:1') &&
    (In = 'embed-responsive-2by1');
  const hn = reactExports.useMemo(() => p?._id && `${ CLOUDFRONT_URL }/${ p._id }.jpg`, [
    p?._id
  ]);
  reactExports.useEffect(
    () => {
      if (!new URLSearchParams(window.location.search).get('comments')) return;
      const kn = new URLSearchParams(window.location.search),
        ti = new URLSearchParams(window.location.search);
      ti.delete('comments'),
        mr.replace({
          pathname: window.location.pathname,
          search: ti.toString()
        }),
        mr.push({
          pathname: window.location.pathname,
          search: kn.toString()
        })
    },
    []
  ),
    reactExports.useEffect(
      () => {
        const Hn = new URLSearchParams(ar.search).get('comments');
        !p ||
          !Hn ||
          actionCommentsMobile$.next({
            show: !0,
            identifier: p._id,
            page: 'Watch',
            title: p.title,
            url: window.location.href
          })
      },
      [
        ar,
        p
      ]
    );
  const en = 992,
    si = 200;
  reactExports.useEffect(
    () => {
      let Hn = window.innerWidth,
        kn;
      const ti = (Vn, qn) => Vn > en &&
        qn <= en ||
        Vn <= en &&
          qn > en;
      function Di() {
        clearTimeout(kn),
          kn = setTimeout(
            () => {
              const Vn = window.innerWidth;
              ti(Hn, Vn) &&
                (Qt(!1), an(void 0)),
              Hn = Vn
            },
            si
          )
      }
      return window.addEventListener('resize', Di),
        window.addEventListener('orientationchange', Di),
        () => {
          clearTimeout(kn),
          window.removeEventListener('resize', Di),
          window.removeEventListener('orientationchange', Di)
        }
    },
    [
      Qt,
      an
    ]
  );
  const di = p ? `${ window.location.origin }${ getUrl({
    path: WATCH,
    language: l,
    params: {
      id: p._id
    }
  }) }` : '',
    yi = async() => {
      if (IS_MOBILE) try {
        await navigator.share({
          title: p?.title,
          url: di
        })
      } catch {
      } else Zr(!0)
    };
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement(
      'div',
      {
        className: `ds-video-section
          
          ${ ne ? 'ds-video-section--collapse' : '' }
        
          `,
        'data-testid': 'video-section'
      },
      reactExports.createElement(
        Card,
        {
          className: 'ds-card ds-video-section__card-video'
        },
        reactExports.createElement(
          Card.Body,
          {
            className: 'ds-card__body ds-video-section__card-video-body'
          },
          reactExports.createElement(
            'div',
            {
              className: 'ds-card__content ds-video-section__card-video-content'
            },
            reactExports.createElement(
              'div',
              {
                className: 'ds-video-section__embed'
              },
              reactExports.createElement(
                'div',
                {
                  className: `embed-responsive ${ In }`
                },
                y &&
                  xr &&
                  reactExports.createElement(
                    'div',
                    {
                      className: 'ds-video-section__offline'
                    },
                    reactExports.createElement(
                      'p',
                      {
                        className: 'ds-video-section__offline-title'
                      },
                      'Offline mode'
                    ),
                    Nr ? reactExports.createElement(
                      'p',
                      {
                        className: 'ds-video-section__offline-label'
                      },
                      'It seems you\'re trying to watch a video that hasn\'t been downloaded. Download your favorite videos and you can enjoy them offline in the',
                      reactExports.createElement(
                        Link,
                        {
                          to: LIBRARY_DOWNLOADS,
                          className: 'ds-link-primary'
                        },
                        ' Library > Downloads '
                      ),
                      'section of our website.'
                    ) : reactExports.createElement(
                      'p',
                      {
                        className: 'ds-video-section__offline-label'
                      },
                      'Offline downloads are available with a Premium plan.',
                      reactExports.createElement('br', null),
                      reactExports.createElement(
                        Link,
                        {
                          to: getUrl({
                            path: TRY_PREMIUM,
                            language: l
                          }),
                          className: 'ds-link-primary'
                        },
                        'Upgrade to premium'
                      ),
                      ' ',
                      'and enjoy watching videos offline anytime!'
                    )
                  ),
                y &&
                  !xr &&
                  reactExports.createElement(
                    'div',
                    {
                      className: 'ds-video-section__offline'
                    },
                    reactExports.createElement(
                      'p',
                      {
                        className: 'ds-video-section__offline-title'
                      },
                      'Offline mode'
                    ),
                    reactExports.createElement(
                      'p',
                      {
                        className: 'ds-video-section__offline-label'
                      },
                      'You can watch this video offline by installing the app.'
                    )
                  ),
                !y &&
                  reactExports.createElement(
                    reactExports.Fragment,
                    null,
                    reactExports.createElement(
                      'div',
                      {
                        className: 'ds-video-section__default'
                      },
                      hn &&
                        reactExports.createElement(
                          'img',
                          {
                            className: 'ds-video-section__default-image',
                            src: hn,
                            alt: 'thumbnail',
                            'data-testid': 'video-thumbnail'
                          }
                        ),
                      !p &&
                        reactExports.createElement(Spinner, null)
                    ),
                    G &&
                      reactExports.createElement(
                        reactExports.Fragment,
                        null,
                        q === 'youtube' &&
                          reactExports.createElement(
                            YoutubePlayer,
                            {
                              ref: P,
                              video: p,
                              onState: oe,
                              'data-testid': 'video-youtube-player'
                            }
                          ),
                        q === 'bunny' &&
                          F &&
                          F.length > 0 &&
                          reactExports.createElement(
                            ShakaPlayer,
                            {
                              ref: P,
                              video: p,
                              displayType: O,
                              manifest: b,
                              onState: oe,
                              onNext: Qe,
                              'data-testid': 'video-shaka-player'
                            }
                          )
                      ),
                    reactExports.createElement(
                      PremiumMessage,
                      {
                        show: Q,
                        loginCallback: () => {
                          zt(!0),
                          er(!1),
                          sr(!0),
                          Sr({
                            type: 'SIGN_IN',
                            payload: {
                              isClosable: !1,
                              message: 'Log in to watch this private video.'
                            }
                          })
                        },
                        unlockNowCallback: () => {
                          zt(!0),
                          er(!1),
                          mr.push(getUrl({
                            path: TRY_PREMIUM,
                            language: l
                          }))
                        }
                      }
                    ),
                    reactExports.createElement(
                      BackgroundMessage,
                      {
                        show: Z,
                        continueCallback: () => {
                          zt(!0),
                          cr(!1)
                        }
                      }
                    ),
                    reactExports.createElement(
                      VideoOverlay,
                      {
                        show: $ &&
                          !Q &&
                          !Z,
                        showPlayNext: J,
                        videoA: C,
                        videoB: T,
                        autoplaySeconds: R,
                        autoplayCancelled: D,
                        onClose: () => Jt(!1),
                        onPlay: () => {
                          P.current?.play(),
                          Jt(!1)
                        },
                        onNextVideo: () => {
                          Qe(),
                          Jt(!1)
                        },
                        cancelPlayNext: z
                      }
                    )
                  )
              )
            ),
            (!m || !p) &&
              !y &&
              !ne &&
              reactExports.createElement(
                'div',
                {
                  className: 'ds-page__spinner'
                },
                reactExports.createElement(Spinner, null)
              ),
            m &&
              p &&
              reactExports.createElement(
                'div',
                {
                  className: `ds-video-section__information
                    
                  ${ K ||
                    ne ? 'ds-video-section__information--hidden' : '' }
                  
                  `
                },
                renderTitle(p, Tr.data, gr.data, Ur, ir, Vt, yi),
                renderDescription(p.description),
                reactExports.createElement(
                  'div',
                  {
                    className: 'ds-video-section__badges',
                    'data-testid': 'video-badges'
                  },
                  renderLevel(dr, p.level, l),
                  reactExports.createElement(VideoDifficultyBadge, { difficultyScore: p.difficultyScore }),
                  renderPremium(p.private),
                  renderCountries(dr, p.guides, qt.data?.guidesDictionary, l),
                  renderGuides(dr, p.guides, l),
                  renderTags(dr, p.tags, l)
                ),
                renderPublishedOn(p.publishedAt),
                renderSeriesRelated(Mr, p._id, l),
                renderCommentsMobileButton({
                  isOnline: Ar,
                  videoId: p._id,
                  language: l
                })
              ),
            y &&
              reactExports.createElement(
                'div',
                {
                  className: `ds-video-section__information
                    
                  ${ ne ? 'ds-video-section__information--toggle' : '' }
                  
                  `
                },
                renderTitle(y, Tr.data, gr.data, Ur, ir, Vt, yi),
                reactExports.createElement(
                  'div',
                  {
                    className: 'ds-video-section__badges'
                  },
                  renderLevel(dr, y.level, l),
                  renderPremium(y.private),
                  renderCountries(dr, y.guides, qt.data?.guidesDictionary, l),
                  renderGuides(dr, y.guides, l),
                  renderTags(dr, y.tags, l)
                ),
                renderPublishedOn(y.publishedAt),
                p &&
                  renderCommentsMobileButton({
                    isOnline: Ar,
                    videoId: p._id,
                    language: l
                  })
              )
          )
        )
      ),
      !ne &&
        reactExports.createElement(
          Card,
          {
            className: 'ds-card ds-video-section__card-comments',
            'data-testid': 'video-comments-card'
          },
          reactExports.createElement(
            Card.Body,
            {
              className: 'ds-card__body ds-video-section__card-comments-body'
            },
            reactExports.createElement(
              'div',
              {
                className: `
                ds-card__content ds-video-section__card-comments-content
                  
                ${ K ? 'ds-video-section__card-comments-content--show' : '' }
                
                `
              },
              reactExports.createElement(
                'div',
                {
                  className: 'ds-video-section__card-comments-header',
                  onClick: () => {
                    Qt(!K && Ar),
                    an(void 0)
                  },
                  'data-testid': 'video-comments-button'
                },
                reactExports.createElement(
                  'div',
                  {
                    className: 'ds-video-section__card-comments-header-left'
                  },
                  reactExports.createElement(
                    IconMoon,
                    {
                      className: 'ds-video-section__card-comments-header-icon',
                      icon: 'line-comments'
                    }
                  ),
                  reactExports.createElement(
                    'div',
                    {
                      className: 'ds-video-section__card-comments-header-title'
                    },
                    K &&
                      Yr ? reactExports.createElement('span', null, Yr) : reactExports.createElement('span', null, 'View comments'),
                    !Ar &&
                      reactExports.createElement(OfflineModeMessage, null)
                  )
                ),
                reactExports.createElement(
                  'div',
                  {
                    className: 'ds-video-section__card-comments-header-right'
                  },
                  (K || Ar) &&
                    reactExports.createElement(
                      IconMoon,
                      {
                        className: 'ds-video-section__card-comments-header-toggle-icon ds-video-section__card-comments-header-toggle-icon--up',
                        icon: 'thick-arrow-up'
                      }
                    ),
                  reactExports.createElement(
                    IconMoon,
                    {
                      className: `
                      ds-video-section__card-comments-header-toggle-icon ds-video-section__card-comments-header-toggle-icon--down
                        
                      ${ K ? 'ds-video-section__card-comments-header-toggle-icon--toggle' : '' }
                      
                      `,
                      icon: 'thick-arrow-down'
                    }
                  )
                )
              ),
              p &&
                K &&
                reactExports.createElement(
                  'div',
                  {
                    className: 'ds-video-section__card-comments-collapsable',
                    'data-testid': 'video-comments-content'
                  },
                  reactExports.createElement(
                    Comments,
                    {
                      identifier: p._id,
                      page: 'Watch',
                      title: p.title,
                      url: window.location.href,
                      videoLanguage: p.language,
                      onCommentsCountChange: Hn => {
                        an(Hn)
                      }
                    }
                  )
                )
            )
          )
        )
    ),
    reactExports.createElement(
      ShareModal,
      {
        show: Vr,
        videoUrl: di,
        videoTitle: p?.title,
        closeCallback: () => Zr(!1)
      }
    )
  )
};
