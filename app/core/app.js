console.log('app');
define(['./service/routeResolver'], function() {
  console.log('route resolver');
  var app = angular.module('appModule', ['ngRoute','ngResource','routeResolverServices']);
  console.log(app);
  app.config(['$routeProvider','routeResolverProvider','$controllerProvider','$compileProvider','$filterProvider','$httpProvider','$provide',
		function ($routeProvider,routeResolverProvider,$controllerProvider,$compileProvider,$filterProvider,$provide) {
    console.log('config');
		app.register =
    {
      controller: $controllerProvider.register,
      directive: $compileProvider.directive,
      filter: $filterProvider.register,
      factory: $provide.factory,
      service: $provide.service
    };

		var route = routeResolverProvider.route;
		// angular.forEach(APP.DATA.CONFIG.URLS, function(obj){
		// 	$routeProvider.when('/'+obj.temp, route.resolve(obj.temp));
		// });
		/*RUTA FIJAS*/
		$routeProvider.when('/demo', route.resolve('demo'));
		$routeProvider.when('/404', route.resolve('404'));
		$routeProvider.when('/', route.resolve('demo'));

		//$routeProvider.when('/', { redirectTo: '/demo' });
		$routeProvider.otherwise({ redirectTo: '/dashboard' });
	}]);
  app.controller('appController', ['$scope','$rootScope','$location','$http', function($scope,$rootScope,$location,$http) {
	  var ng = $scope;
    ng.demo = 'HOLA SOY UN DEMO';
    // $rootScope.$on('$routeChangeStart', function (event, next, current) {
    // 	APP.DATA.FN.showLoadingPage();
    // 	ng.urls = APP.DATA.CONFIG.URLS;
    // 	console.info('Location: '+$location.path());
	  //   console.log(ng.menuDemo);
    // });
    //
    // $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    // 	console.log('CURRENT: '+current.loadedTemplateUrl);
    //   APP.DATA.FN.removeLoadingPage();
    // });
    //
	  // $rootScope.$on("$routeChangeError", function (event) {
    //   $location.path('/404');
    // });
    //
	  // ng.menus = function(){
		// 	console.info('MENUS');
		// 	ng.menuDemo = APP.DATA.CONFIG.URLS;
		// };
	}]);
	return app;
});
