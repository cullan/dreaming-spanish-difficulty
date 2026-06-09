async function replacementSrc() {
  fileNames = [
    // new functions
    'replacements/seriesDifficultyRange.js', // calculate difficulty range of a series
    // edited functions
    'replacements/processWatchedSeries.js', // determines which series show up in continue watching
    // new components
    'replacements/SeriesDifficultyBadgeOverlay.js', // difficulty range for a series in corner overlay
    'replacements/VideoDifficultyBadge.js', // difficulty badge for video cards
    'replacements/SeriesDifficultyBadge.js', // difficulty badge for series
    'replacements/SeriesProgressBar.js', // wrap a series component and display progress beneath it
    // edited components
    'replacements/CatalogVideoCard.js', // video cards on library page
    'replacements/EpisodeCard.js', // video card on series detail page
    'replacements/MyListSeries.js', // series cards on library page
    'replacements/SeriesCard.js', // series cards on series pages (Series -> level)
    'replacements/SeriesCarousel.js', // large series carousel on top of series page
    'replacements/SeriesCatalogs.js', // series cards on series page
    'replacements/SeriesContinueWatching.js', // continue watching cards on series page
    'replacements/SeriesModal.js', // series detail page
    'replacements/VideoCard.js', // videos on library page
    'replacements/VideoHorizontalCard.js', // videos on library -> history page
    'replacements/VideoSection.js', // playing a video
    'replacements/VideoThumbnail.js', // video thumbnails with overlay
  ];

  const promises = fileNames.map(readFile);
  const contents = await Promise.all(promises);
  return contents.join("\n");
}

async function readFile(filename) {
  const fileURL = browser.runtime.getURL(filename)
  const response = await fetch(fileURL);
  const contents = await response.text();
  return contents;
}

function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();
  let script = "";

  filter.ondata = event => {
    let chunk = decoder.decode(event.data, {stream: true});
    script += chunk;
  }

  filter.onstop = async event => {
    const replacements = await replacementSrc();
    script += replacements;
    filter.write(encoder.encode(script));
    filter.close();
  };

  return {};
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://app.dreaming.com/*"], types: ["script"]},
  ["blocking"]
);
