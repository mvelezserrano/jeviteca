
angular
	.module("jeviteca")
	.filter("orderItems", function() {

		return function( collection ) {

			var result=[];
			var order = 1;
			angular.forEach(collection, function (value) {
				//debugger;
				result.push(order.toString() + ". " + value);
				order++;
			});

			return result;
		};
		
	});