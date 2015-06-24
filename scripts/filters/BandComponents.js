
angular
	.module("jeviteca")
	.filter("bandComponents", function() {

		return function( collection ) {

			var result=[];
			angular.forEach(collection, function (value) {
				//debugger;
				result.push(value.name);
			});

			return result.join(", ");
		};
		
	});