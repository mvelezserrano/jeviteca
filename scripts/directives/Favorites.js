
angular
    .module("jeviteca")
    .directive("favorites", function () {

        return {
            restrict: "EA",
            replace: true,
            scope: {
                idModel: "="
            },
            templateUrl: "views/Favorites.html",
            link: function(scope) {

                if(typeof(Storage) !== "undefined") {
                    scope.isFavorite = function() {
                        var favorite = localStorage.getItem("album_" + scope.idModel);
                        return favorite === "true";
                    };

                    scope.addFavorite = function () {
                        localStorage.setItem("album_" + scope.idModel, "true");
                    };

                    scope.removeFavorite = function () {
                        localStorage.removeItem("album_" + scope.idModel);
                    };
                } else {
                    // No Web Storage support..
                    alert("Sorry, your browser doesn't admits local storage");
                }

            }
        }
    });