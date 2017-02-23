var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  username: {type: String}
}, {timestampes: true})

mongoose.model('User', userSchema)
