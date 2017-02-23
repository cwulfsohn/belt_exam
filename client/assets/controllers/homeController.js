app.controller('homeController', function($scope, userFactory, $cookies){
  $scope.username = $cookies.get('username')
  $scope.id = $cookies.get('id')
})
