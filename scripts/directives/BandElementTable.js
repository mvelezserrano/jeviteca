
angular
    .module("jeviteca")
    .directive("bandElementTable", function() {

        return {
            restrict: "AE",
            templateUrl: "views/BandElementTable.html",
            replace: true,
            scope: {
                band: "="
            },
            link: function (scope) {
                
            }
        };
    });