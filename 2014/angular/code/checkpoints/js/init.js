// Initiate the application object.
var app = angular.module('doodle', ['ngResource', 'ngRoute', 'ngCookies']);


// Global configurations.
app.value('config', {
    baseUrl: 'https://webdev-c9-alexandrutopliceanu.c9.io/'
});
