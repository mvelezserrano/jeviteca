
angular
    .module("jeviteca")
    .directive( "trackListElementTable", ["$window", "ExternalServices", function ( $window, ExternalServices ) {
        return {
            restrict: "AE",
            templateUrl: "views/TrackListElementTable.html",
            replace: true,
            scope: {
                trackNumber: "=",
                bandName: "=",
                trackName: "="
            },
            link: function (scope) {
                scope.openYoutubeLink = function(){
                    var url = ExternalServices.getYouTubeLink(scope.bandName, scope.trackName);
                    $window.open(url, '_blank');
                };
            }
        };
    }]);