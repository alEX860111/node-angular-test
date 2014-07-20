var app = angular.module('myapp', []);

app.controller('mycontroller', function($scope) {
	$scope.title = 'My favorite cars';
	$scope.cars = ['Mustang', 'Camaro', 'Challenger', 'Road Runner', 'Javelin'];
});

app.controller('formcontroller', function() {
	this.data = {};
	this.submitForm = function() {
		console.dir(this.data);
	};
});