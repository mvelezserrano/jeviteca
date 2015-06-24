
angular
    .module("jeviteca")
    .service("InfoProvider", ["$http", function($http) {

        this.getAlbums = function() {
            return $http.get("assets/data/albums.json");
        };

        this.getBands = function() {
            return $http.get("assets/data/bands.json");
        };

        this.getGenres = function() {
            return $http.get("assets/data/genres.json");
        };


    }]);