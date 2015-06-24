
angular
    .module("jeviteca")
    .service("GenreProvider", ["$http", function($http) {

        this.getGenres = function() {
            return $http.get("assets/data/genres.json");
        };
    }]);