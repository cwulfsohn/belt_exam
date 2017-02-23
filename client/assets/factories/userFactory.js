app.factory("userFactory", function($http){
  factory = {};
  factory.addUser = function(user, callback){
    $http.post('/user', user).then(function(data){
      callback(data.data)
    })
  }
  return factory
})
