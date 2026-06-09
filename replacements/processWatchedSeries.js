processWatchedSeries = (u, l, p) => {
  return u.filter(
    m => l[m._id]?.episodes.some(
      y => {
        const b = p[y._id];
        return b &&
          b.watchPosition > (y.duration - (y.endCutout ?? 0)) / 2
      }
    ) && !l[m._id]?.episodes.every(
      e => {
        const b = p[e._id];
        return b && b.watched;
      }
    )
  ).map(
    m => {
      const y = l[m._id];
      return y &&
        (
          y.lastWatched = void 0,
          y.episodes.forEach(
            b => {
              const C = p[b._id];
              if (C) {
                const T = C.lastWatched;
                (!y.lastWatched || T > y.lastWatched) &&
                  (y.lastWatched = T)
              }
            }
          )
        ),
        m
    }
  ).sort(
    (m, y) => {
      const b = l[m._id]?.lastWatched?.getTime() ?? Number.MIN_SAFE_INTEGER,
        C = l[y._id]?.lastWatched?.getTime() ?? Number.MIN_SAFE_INTEGER;
      return b > C ? - 1 : b < C ? 1 : 0
    }
  ).slice(0, Math.min(u.length, MAXIMUM_NUMBER_OF_SERIES))
};
