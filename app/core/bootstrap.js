/*jshint browser:true */
'use strict';
// load Angular
require('./vendor')(); 

var appModule = require('../index');
angular.element(document).ready(function () {
  console.log('document rady');
  require(['./app'],function() {
    console.log('require app');
    angular.bootstrap(document, [appModule.name], {
    });
  })
});
