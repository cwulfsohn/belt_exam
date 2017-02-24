var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {
  addUser: function(request, response){
    User.findOne({username: request.body.username}, function(err, user){
      console.log(user)
      if(err){
        response.json({err: err})
      }
      else if (user){
        response.json({user:user})
      }
      else{
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
    })
  }
}
