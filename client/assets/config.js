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
  .when('/create', {
    templateUrl: "partials/create.html",
    controller: "createController"
  })
  .when('/poll/:id', {
    templateUrl: "partials/poll.html",
    controller: "pollController"
  })
  .otherwise({
    redirectTo: '/'
  })
})
