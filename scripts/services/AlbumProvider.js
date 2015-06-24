
angular
    .module("jeviteca")
    .service("AlbumProvider", ["$http", function($http) {

        this.getAlbums = function() {
            return $http.get("assets/data/albums.json");
        };
    }]);