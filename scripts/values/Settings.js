
angular
    .module("jeviteca")
    .value("Settings", {
        "albumsUrl": "assets/data/albums.json",
        "bandsUrl": "assets/data/bands.json",
        "genresUrl": "assets/data/genres.json",
        "wikiBaseUrl": "https://es.wikipedia.org/wiki/Special:Search?search=",
        "youtubeBaseUrl": "https://www.youtube.com/results?search_query="
    });