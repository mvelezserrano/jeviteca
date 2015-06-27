
angular
    .module("jeviteca")
    .controller("BandDetailCtrl", ["$scope", "Band", "ExternalServices", "$window", function ($scope, Band, ExternalServices, $window) {

        $scope.band = Band;

        $scope.openWikipediaLink = function(){
            var url = ExternalServices.getWikipediaLink($scope.band.name);
            $window.open(url, '_blank');
        };

    }]);