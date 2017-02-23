var mongoose = require('mongoose')
var User = require('../controllers/users.js')

module.exports = function(app){
  app.post('/user', User.addUser)
}
