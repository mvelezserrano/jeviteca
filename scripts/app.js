angular
    .module("jeviteca",["ngRoute", "route-segment", "view-segment"]);

angular
    .module("jeviteca")
    .config(["$routeSegmentProvider", "$routeProvider", function($routeSegmentProvider, $routeProvider) {

        $routeSegmentProvider.when("/albums", "albums");
        $routeSegmentProvider.when("/bands", "bands");
        $routeSegmentProvider.when("/genres", "genres");

        $routeSegmentProvider.segment("albums", {
            controller: "AlbumsCtrl",
            templateUrl: "views/Albums.html",
            resolve: {
                Albums: ["InfoProvider", function(InfoProvider) {
                    return InfoProvider.getAlbums();
                }]
            }
        });

        $routeSegmentProvider.segment("bands", {
            controller: "BandsCtrl",
            templateUrl: "views/Bands.html",
            resolve: {
                Bands: ["InfoProvider", function(InfoProvider) {
                    return InfoProvider.getBands();
                }]
            }
        });

        $routeSegmentProvider.segment("genres", {
            controller: "GenresCtrl",
            templateUrl: "views/Genres.html",
            resolve: {
                Genres: ["InfoProvider", function(InfoProvider) {
                    return InfoProvider.getGenres();
                }]
            }
        });

        $routeProvider.otherwise( {
            redirectTo: "/albums"
        });

    }]);