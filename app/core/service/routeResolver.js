'use strict';
define([], function () {
    var services = angular.module('routeResolverServices', []);
    console.log('services');
    services.provider('routeResolver', function () {

        this.$get = function () {
            return this;
        };

        this.routeConfig = function () {
            var viewsDirectory = 'views/',
                controllersDirectory = 'controllers/',

            setBaseDirectories = function (viewsDir, controllersDir) {
                viewsDirectory = viewsDir;
                controllersDirectory = controllersDir;
            },

            getViewsDirectory = function () {
                return viewsDirectory;
            },

            getControllersDirectory = function () {
                return controllersDirectory;
            };

            return {
                setBaseDirectories: setBaseDirectories,
                getControllersDirectory: getControllersDirectory,
                getViewsDirectory: getViewsDirectory
            };
        }();

        this.route = function (routeConfig) {
          console.info(routeConfig);
          var resolve = function (baseName) {
            var routeDef = {};
            routeDef.templateUrl = routeConfig.getViewsDirectory() + baseName + '.html';
            routeDef.controller = baseName + 'Controller';
            routeDef.resolve = {
                load: ['$q', '$rootScope', function ($q, $rootScope) {
                    var dependencies = [routeConfig.getControllersDirectory() + baseName + 'Controller.js'];
                    return resolveDependencies($q, $rootScope, dependencies);
                }]
            };
            return routeDef;
          },
          resolveDependencies = function ($q, $rootScope, dependencies) {
              var defer = $q.defer();
              console.log('dependencies: '+dependencies);
              require([dependencies], function () {
                $rootScope.$apply(function() {
                  defer.resolve();
                })
              });
              return defer.promise;
          };
          return {
              resolve: resolve
          };
        }(this.routeConfig);

    });
});
