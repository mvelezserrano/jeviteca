
angular
	.module("jeviteca")
	.filter("arrayToStringFilter", function() {

		return function( collection ) {

			return collection.join(", ");
		};
		
	});