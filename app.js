var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
$routeProvider
.when ('/',{
  controller:'controllerone',
  templateUrl: 'viewone.html'
})
.when('/display',{
  templateUrl: 'viewtwo.html',
  controller: 'controllertwo'
});



  $locationProvider.hashPrefix('');
});