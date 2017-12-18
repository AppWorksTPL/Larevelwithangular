// This is the mai file where angular isdefined  ////////
var myApp = angular.module('myApp',['ngRoute','ngCookies']);

myApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider)
{
$routeProvider.when('/',{
     
     templateUrl:'template/user/login.html',
     controller:'userController'
});
$routeProvider.when('/dashboard',{
     
     templateUrl:'template/user/dashboard.html',
     controller:'userController'
});
$routeProvider.when('/logout',{
     
     templateUrl:'template/user/logout.html',
     controller:'userController'
});

$routeProvider.otherwise('/');

}
]);