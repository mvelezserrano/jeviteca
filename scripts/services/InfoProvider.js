
angular
    .module("jeviteca")
    .service("InfoProvider", ["$http", "$q", "$filter", function($http, $q, $filter) {

        this.getAlbums = function() {
            return $http.get("assets/data/albums.json");
        };

        this.getAlbumById = function(albumId) {

            var deferred = $q.defer();

            $http.get("assets/data/albums.json").then(function(data) {

                var element = $filter("filter")(data.data, {"id": albumId})[0];

                deferred.resolve(element);
            });

            return deferred.promise;
        };

        this.getBands = function() {
            return $http.get("assets/data/bands.json");
        };

        this.getBandById = function(bandId) {

            var deferred = $q.defer();

            $http.get("assets/data/bands.json").then(function(data) {

                var element = $filter("filter")(data.data, {"id": bandId})[0];

                deferred.resolve(element);
            });

            return deferred.promise;
        };

        this.getGenres = function() {
            return $http.get("assets/data/genres.json");
        };


    }]);