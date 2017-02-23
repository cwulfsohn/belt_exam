app.controller('homeController', function($scope, userFactory, $cookies, $location){
  $scope.username = $cookies.get('username')
  $scope.id = $cookies.get('id')
  $scope.logout = function(){
  $cookies.remove('username')
  $cookies.remove('id')
  $location.url('/')
}
})
