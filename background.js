async function replacementSrc() {
  fileNames = [
    'replacements/VideoThumbnail.js',
    'replacements/VideoSection.js',
    'replacements/VideoCard.js',
    'replacements/VideoHorizontalCard.js',
    'replacements/CatalogVideoCard.js',
    'replacements/EpisodeCard.js',
    'replacements/seriesDifficultyRange.js',
    'replacements/SeriesCard.js',
    'replacements/SeriesContinueWatching.js',
    'replacements/SeriesCatalogs.js',
    'replacements/SeriesModal.js',
    'replacements/SeriesCarousel.js',
    'replacements/MyListSeries.js'
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
