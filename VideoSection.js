VideoSection = (s) => {
  const {
    language: l,
    video: p,
    isFetchedVideo: m,
    offlineVideo: y,
    manifest: b,
    videoA: C,
    videoB: T,
    autoplaySeconds: R,
    autoplayCancelled: N,
    series: O,
    nextVideos: U,
    displayType: L,
    source: G,
    playerReference: M,
    showPlayer: V,
    showPlayNext: Z,
    showOverlay: H,
    showComments: Q,
    showPremiumMessage: J,
    showBackgroundMessage: ee,
    showPlaylist: oe,
    onState: Ve,
    onNextVideo: Ut,
    onShowPlayer: Vt,
    onShowOverlay: tr,
    onCancelPlayNext: Y,
    onShowComments: Xt,
    onShowPremiumMessage: er,
    onShowBackgroundMessage: cr,
    onShowLoginModal: sr,
    onMarkVideoAsWatched: ar,
    onMarkVideoAsUnwatched: zt
  }
    = s,
    gr = useHistory(),
    or = useLocation(),
    {
      browseState: pr
    }
      = reactExports.useContext(BrowseStateContext),
    Cr = useOnline(),
    Er = useInstalled(),
    {
      dispatch: br
    }
      = useSession(),
    Rr = useUserState(),
    $t = useGetAllVideos({
      language: l
    }),
    vr = useGetAllWatchedVideos({
      language: l
    }),
    Nr = usePremium({
      language: l
    }),
    rn = usePlaylistVideo({
      language: l
    }),
    [
      Kr,
      on
    ] = reactExports.useState(),
    [
      Lr,
      Jr
    ] = reactExports.useState(!1),
    Dr = reactExports.useMemo(
      () => {
        if (!(!m || !p || !O) && p.seriesId && L !== 'series') return O.find(Wn => Wn._id === p.seriesId)
      },
      [
        m,
        p,
        O,
        L
      ]
    );
  const difficulty = calculateDifficulty(s.video?.difficultyScore || 0);
  let On = 'embed-responsive-16by9';
  (!p || p.aspectRatio === '2:1') &&
    (On = 'embed-responsive-2by1');
  const mn = reactExports.useMemo(() => p?._id && `${ CLOUDFRONT_URL }/${ p._id }.jpg`, [
    p?._id
  ]);
  reactExports.useEffect(
    () => {
      if (!new URLSearchParams(window.location.search).get('comments')) return;
      const kn = new URLSearchParams(window.location.search),
        ni = new URLSearchParams(window.location.search);
      ni.delete('comments'),
        gr.replace({
          pathname: window.location.pathname,
          search: ni.toString()
        }),
        gr.push({
          pathname: window.location.pathname,
          search: kn.toString()
        })
    },
    []
  ),
    reactExports.useEffect(
      () => {
        const Wn = new URLSearchParams(or.search).get('comments');
        !p ||
          !Wn ||
          actionCommentsMobile$.next({
            show: !0,
            identifier: p._id,
            page: 'Watch',
            title: p.title,
            url: window.location.href
          })
      },
      [
        or,
        p
      ]
    );
  const en = 992,
    si = 200;
  reactExports.useEffect(
    () => {
      let Wn = window.innerWidth,
        kn;
      const ni = (Gn, Vn) => Gn > en &&
        Vn <= en ||
        Gn <= en &&
          Vn > en;
      function Mi() {
        clearTimeout(kn),
          kn = setTimeout(
            () => {
              const Gn = window.innerWidth;
              ni(Wn, Gn) &&
                (Xt(!1), on(void 0)),
              Wn = Gn
            },
            si
          )
      }
      return window.addEventListener('resize', Mi),
        window.addEventListener('orientationchange', Mi),
        () => {
          clearTimeout(kn),
          window.removeEventListener('resize', Mi),
          window.removeEventListener('orientationchange', Mi)
        }
    },
    [
      Xt,
      on
    ]
  );
  const fi = p ? `${ window.location.origin }${ getUrl({
    path: WATCH,
    language: l,
    params: {
      id: p._id
    }
  }) }` : '',
    _i = async() => {
      if (IS_MOBILE) try {
        await navigator.share({
          title: p?.title,
          url: fi
        })
      } catch {
      } else Jr(!0)
    };
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement(
      'div',
      {
        className: `ds-video-section
          
          ${ oe ? 'ds-video-section--collapse' : '' }
        
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
                  className: `embed-responsive ${ On }`
                },
                y &&
                  Er &&
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
                  !Er &&
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
                      mn &&
                        reactExports.createElement(
                          'img',
                          {
                            className: 'ds-video-section__default-image',
                            src: mn,
                            alt: 'thumbnail',
                            'data-testid': 'video-thumbnail'
                          }
                        ),
                      !p &&
                        reactExports.createElement(Spinner, null)
                    ),
                    V &&
                      reactExports.createElement(
                        reactExports.Fragment,
                        null,
                        G === 'youtube' &&
                          reactExports.createElement(
                            YoutubePlayer,
                            {
                              ref: M,
                              video: p,
                              onState: Ve,
                              'data-testid': 'video-youtube-player'
                            }
                          ),
                        G === 'bunny' &&
                          U &&
                          U.length > 0 &&
                          reactExports.createElement(
                            ShakaPlayer,
                            {
                              ref: M,
                              video: p,
                              displayType: L,
                              manifest: b,
                              onState: Ve,
                              onNext: Ut,
                              'data-testid': 'video-shaka-player'
                            }
                          )
                      ),
                    reactExports.createElement(
                      PremiumMessage,
                      {
                        show: J,
                        loginCallback: () => {
                          Vt(!0),
                          er(!1),
                          sr(!0),
                          br({
                            type: 'SIGN_IN',
                            payload: {
                              isClosable: !1,
                              message: 'Log in to watch this private video.'
                            }
                          })
                        },
                        unlockNowCallback: () => {
                          Vt(!0),
                          er(!1),
                          gr.push(getUrl({
                            path: TRY_PREMIUM,
                            language: l
                          }))
                        }
                      }
                    ),
                    reactExports.createElement(
                      BackgroundMessage,
                      {
                        show: ee,
                        continueCallback: () => {
                          Vt(!0),
                          cr(!1)
                        }
                      }
                    ),
                    reactExports.createElement(
                      VideoOverlay,
                      {
                        show: H &&
                          !J &&
                          !ee,
                        showPlayNext: Z,
                        videoA: C,
                        videoB: T,
                        autoplaySeconds: R,
                        autoplayCancelled: N,
                        onClose: () => tr(!1),
                        onPlay: () => {
                          M.current?.play(),
                          tr(!1)
                        },
                        onNextVideo: () => {
                          Ut(),
                          tr(!1)
                        },
                        cancelPlayNext: Y
                      }
                    )
                  )
              )
            ),
            (!m || !p) &&
              !y &&
              !oe &&
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
                    
                  ${ Q ||
                    oe ? 'ds-video-section__information--hidden' : '' }
                  
                  `
                },
                renderTitle(p, Rr.data, vr.data, rn, ar, zt, _i),
                renderDescription(p.description),
                reactExports.createElement(
                  'div',
                  {
                    className: 'ds-video-section__badges',
                    'data-testid': 'video-badges'
                  },
                  renderLevel(pr, p.level, l),
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
                  renderPremium(p.private),
                  renderCountries(pr, p.guides, $t.data?.guidesDictionary, l),
                  renderGuides(pr, p.guides, l),
                  renderTags(pr, p.tags, l)
                ),
                renderPublishedOn(p.publishedAt),
                renderSeriesRelated(Dr, p._id, l),
                renderDownloadButtons(p),
                renderCommentsMobileButton({
                  isOnline: Cr,
                  videoId: p._id,
                  language: l
                })
              ),
            y &&
              reactExports.createElement(
                'div',
                {
                  className: `ds-video-section__information
                    
                  ${ oe ? 'ds-video-section__information--toggle' : '' }
                  
                  `
                },
                renderTitle(y, Rr.data, vr.data, rn, ar, zt, _i),
                reactExports.createElement(
                  'div',
                  {
                    className: 'ds-video-section__badges'
                  },
                  renderLevel(pr, y.level, l),
                  renderPremium(y.private),
                  renderCountries(pr, y.guides, $t.data?.guidesDictionary, l),
                  renderGuides(pr, y.guides, l),
                  renderTags(pr, y.tags, l)
                ),
                renderPublishedOn(y.publishedAt),
                p &&
                  renderCommentsMobileButton({
                    isOnline: Cr,
                    videoId: p._id,
                    language: l
                  })
              )
          )
        )
      ),
      !oe &&
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
                  
                ${ Q ? 'ds-video-section__card-comments-content--show' : '' }
                
                `
              },
              reactExports.createElement(
                'div',
                {
                  className: 'ds-video-section__card-comments-header',
                  onClick: () => {
                    Xt(!Q && Cr),
                    on(void 0)
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
                    Q &&
                      Kr ? reactExports.createElement('span', null, Kr) : reactExports.createElement('span', null, 'View comments'),
                    !Cr &&
                      reactExports.createElement(OfflineModeMessage, null)
                  )
                ),
                reactExports.createElement(
                  'div',
                  {
                    className: 'ds-video-section__card-comments-header-right'
                  },
                  (Q || Cr) &&
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
                        
                      ${ Q ? 'ds-video-section__card-comments-header-toggle-icon--toggle' : '' }
                      
                      `,
                      icon: 'thick-arrow-down'
                    }
                  )
                )
              ),
              p &&
                Q &&
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
                      onCommentsCountChange: Wn => {
                        on(Wn)
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
        show: Lr,
        videoUrl: fi,
        videoTitle: p?.title,
        closeCallback: () => Jr(!1)
      }
    )
  )
}
