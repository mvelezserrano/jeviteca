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
                Albums: ["AlbumProvider", function(AlbumProvider) {
                    return AlbumProvider.getAlbums();
                }]
            }
        });

        $routeSegmentProvider.segment("bands", {
            controller: "BandsCtrl",
            templateUrl: "views/Bands.html",
            resolve: {
                Bands: ["BandProvider", function(BandProvider) {
                    return BandProvider.getBands();
                }]
            }
        });

        $routeSegmentProvider.segment("genres", {
            controller: "GenresCtrl",
            templateUrl: "views/Genres.html",
            resolve: {
                Genres: ["GenreProvider", function(GenreProvider) {
                    return GenreProvider.getGenres();
                }]
            }
        });

        $routeProvider.otherwise( {
            redirectTo: "/albums"
        });

    }]);