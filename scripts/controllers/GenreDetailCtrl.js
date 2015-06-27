
angular
    .module("jeviteca")
    .controller("GenreDetailCtrl", ["$scope", "Genre", function ($scope, Genre) {

        $scope.genre = Genre;
    }]);