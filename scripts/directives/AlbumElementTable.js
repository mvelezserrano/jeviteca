
angular
    .module("jeviteca")
    .directive("albumElementTable", function() {

        return {
            restrict: "AE",
            templateUrl: "views/AlbumElementTable.html",
            replace: true,
            scope: {
                album: "="
            },
            link: function (scope) {
                
            }
        };
    });