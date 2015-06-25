angular
    .module("jeviteca",["ngRoute", "route-segment", "view-segment"]);

angular
    .module("jeviteca")
    .config(["$routeSegmentProvider", "$routeProvider", function($routeSegmentProvider, $routeProvider) {

        $routeSegmentProvider.when("/albums", "albums");
        $routeSegmentProvider.when("/bands", "bands");
        $routeSegmentProvider.when("/genres", "genres");

        $routeSegmentProvider.when( "/albums/:id/details", "album_detail" )
        $routeSegmentProvider.when( "/bands/:id/details", "band_detail" )

        $routeSegmentProvider.segment("albums", {
            controller: "AlbumsCtrl",
            templateUrl: "views/Albums.html",
            resolve: {
                Albums: ["InfoProvider", function(InfoProvider) {
                    return InfoProvider.getAlbums();
                }]
            }
        });

        $routeSegmentProvider.segment("album_detail", {

            controller: "AlbumDetailCtrl",
            templateUrl: "views/AlbumDetail.html",
            resolve: {

                Album: ["InfoProvider", "$routeParams", function(InfoProvider, $routeParams) {
                    return InfoProvider.getAlbumById($routeParams.id);
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

        $routeSegmentProvider.segment("band_detail", {

            controller: "BandDetailCtrl",
            templateUrl: "views/BandDetail.html",
            resolve: {

                Band: ["InfoProvider", "$routeParams", function(InfoProvider, $routeParams) {
                    return InfoProvider.getBandById($routeParams.id);
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