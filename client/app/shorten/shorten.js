angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.urlRegex = "!\"#$%&\'()*+,-./@:;<=>[\\]^_`{|}~";
  $scope.addLink = function() {
    Links.post($scope.link).then(function(link){
      console.log(link);
      $scope.link = {};
    });
  }

  // $scope.addLink();
});
