const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var userSchema = mongoose.Schema({
  username:{
    type:String,
    required:[true,'username is required, must not empty'],
    unique:true,
    uniqueCaseInsensitive: true,
    validate: {
      validator: function(input) {
        return /.{5,}/.test(input);
      },
      message: '{VALUE} username must be 5 character or more'
    }
  },
  password:{
    type:String,
    required:[true,'password is required, must not empty']
  }
}).plugin(uniqueValidator, { message: '{PATH} existed' })

var User = mongoose.model('User',userSchema)

module.exports = User;