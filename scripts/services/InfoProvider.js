
angular
    .module("jeviteca")
    .service("InfoProvider", ["$http", "$q", "$filter", "Settings", function($http, $q, $filter, Settings) {

        this.getAlbums = function() {
            return $http.get(Settings.albumsUrl);
        };

        this.getAlbumById = function(albumId) {

            var deferred = $q.defer();

            $http.get(Settings.albumsUrl).then(function(data) {

                var element = $filter("filter")(data.data, {"id": albumId})[0];

                deferred.resolve(element);
            });

            return deferred.promise;
        };

        this.getBands = function() {
            return $http.get(Settings.bandsUrl);
        };

        this.getBandById = function(bandId) {

            var deferred = $q.defer();

            $http.get(Settings.bandsUrl).then(function(data) {

                var element = $filter("filter")(data.data, {"id": bandId})[0];

                deferred.resolve(element);
            });

            return deferred.promise;
        };

        this.getGenres = function() {
            return $http.get(Settings.genresUrl);
        };

        this.getGenreById = function(genreId) {

            var deferred = $q.defer();

            $http.get(Settings.bandsUrl).then(function(data) {

                var element = $filter("filter")(data.data, {"id": genreId})[0];

                deferred.resolve(element);
            });

            return deferred.promise;
        };


    }]);