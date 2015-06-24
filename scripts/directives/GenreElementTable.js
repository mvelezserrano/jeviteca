
angular
    .module("jeviteca")
    .directive("genreElementTable", function() {

        return {
            restrict: "AE",
            templateUrl: "views/GenreElementTable.html",
            replace: true,
            scope: {
                genre: "="
            },
            link: function (scope) {
                
            }
        };
    });