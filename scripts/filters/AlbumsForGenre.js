
angular
	.module("jeviteca")
	.filter("albumsForGenre", function() {

		return function( collection ) {

			var result=[];
			angular.forEach(collection, function (value) {
				//debugger;
				result.push(value.title);
			});

			return result.join(", ");
		};
		
	});