'use strict';
console.log('demo controller');
define(['./app'], function (app) {
	app.register.controller('demoController', ['$scope','$http', function($scope,$http) {
	   	var ng = $scope;
	   	ng.demo = 'Hola soy demo controller';
	}]);
});
