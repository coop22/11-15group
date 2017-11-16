var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
$routeProvider
.when ('/',{
  controller:'controllerOne',
  templateUrl: 'viewone.html'
})
.when('/display',{
  templateUrl: 'viewtwo.html',
  controller: 'controllerTwo'
});



  $locationProvider.hashPrefix('');
});