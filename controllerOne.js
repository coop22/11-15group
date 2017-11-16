var app = angular.module('myApp');

app.controller('controllerOne', function ($scope, $timeout, RedditFactory) {
  // $scope.animal = 'cat';

  RedditFactory.getPosts().then(function(data){
    console.log(data);
    $timeout($scope.posts = data);
  })

  $scope.save = function(){
    RedditFactory.savedText = $scope.text;
  }
 
});