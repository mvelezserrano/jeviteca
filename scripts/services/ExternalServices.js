
angular
    .module("jeviteca")
    .service("ExternalServices", ["Settings", function (Settings) {

        this.getWikipediaLink = function( bandName ) {
            var query = encodeURIComponent( bandName );
            return Settings.wikiBaseUrl + query;
        },

            this.getYouTubeLink = function ( bandName, trackName ) {
                var query = encodeURIComponent(( bandName + " " + trackName ).toLowerCase());
                return Settings.youtubeBaseUrl + query;
            };
    }]);