module.exports = function () {
    /* Styles*/
    require('../index.scss');
    require('../../node_modules/mdi/css/materialdesignicons.min.css');
    /* JS */
    global.$ = global.jQuery = require('jquery');
    require('velocity-animate');
    global.config = require('./data/config');
    global.fn = require('./data/fn');
    require('angular');
    require('angular-route');
    require('angular-resource');
    global.moment = require('moment');
    require('node-lumx');
};
