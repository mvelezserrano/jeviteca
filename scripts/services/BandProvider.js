
angular
    .module("jeviteca")
    .service("BandProvider", ["$http", function($http) {

        this.getBands = function() {
            return $http.get("assets/data/bands.json");
        };
    }]);