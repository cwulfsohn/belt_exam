var app = angular.module('app', ['ngRoute', 'ngCookies'])
app.config(function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: "partials/login.html",
    controller: "userController"
  })
  .when('/home', {
    templateUrl: "partials/home.html",
    controller: "homeController"
  })
  .otherwise({
    redirectTo: '/'
  })
})
