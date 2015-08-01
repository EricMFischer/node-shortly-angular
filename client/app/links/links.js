var app = angular.module('shortly.links', []);

app.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.text = '';

  $scope.getLinks = function(){
    Links.get().then(function(data){
      $scope.data.links = data;
    });
  }
  $scope.getLinks();
});

app.filter('searchFor', function() {

  return function(array, text) {
    var result = [];
    if (!text) {return array;}
    else {
      for (var i=0; i<array.length; i++) {
        if (array[i].title.toLowerCase().indexOf(text) !== -1) {
          result.push(array[i]);
        }
      }
    }
    return result;
  };
});