var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {
  addUser: function(request, response){
    var user = User({username: request.body.username})
    user.save(function(err, user){
      if(err){
        response.json({err: err})
      }
      else{
        response.json({user: user})
      }
    })
  }
}
