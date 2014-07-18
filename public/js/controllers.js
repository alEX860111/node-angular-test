var app = angular.module('myapp', []);

app.controller('mycontroller', function($scope) {
	$scope.name = 'world';
	$scope.numbers = [1, 2, 3];
});