app.controller('MessagesController', function ($scope, MessagesService) {
  $scope.vw = {};
  $scope.vw.messages = MessagesService.all;
})
