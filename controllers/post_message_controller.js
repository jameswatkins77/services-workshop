app.controller('PostMessageController', function ($scope, MessagesService, $location) {
  $scope.vw = {};
  $scope.vw.success = "Success!!";
  $scope.vw.message = {};
  $scope.add = function(){
    MessagesService.add($scope.vw.message)
    $location.path('/');
    $location.replace();
  }
})
