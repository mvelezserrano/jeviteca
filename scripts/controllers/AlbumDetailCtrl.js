
angular
    .module("jeviteca")
    .controller("AlbumDetailCtrl", ["$scope", "Album", function ($scope, Album) {

        $scope.album = Album;
    }]);