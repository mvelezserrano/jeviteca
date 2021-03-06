
angular
    .module("jeviteca")
    .controller("NavegacionCtrl", ["$scope", "$routeSegment", function($scope, $routeSegment) {

        // Comprobamos la ruta de nevegación para pintar la pestaña

        // Para que la vista tenga acceso a la función, esta tiene que colgar del scope
        $scope.routeIsAlbums = function () {
            // Es un booleano, es una condición que comprueba si el segmento (o la vista) en la que se está navegando
            // se llama "albums".
            return $routeSegment.startsWith("album");
        }

        $scope.routeIsBands = function () {
            return $routeSegment.startsWith("band");
        }

        $scope.routeIsGenres = function () {
            return $routeSegment.startsWith("genre");
        }

    }]);