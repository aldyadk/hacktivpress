const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var articleSchema = mongoose.Schema({
  title:{
    type:String,
    required:[true,'title is required, must not empty']
  },
  content:{
    type:String,
    required:[true,'content is required, must not empty']
  },
  category:{
    type:String,
    required:[true,'category is required, must not empty']
  },
  author:{
    type:String,
    required:[true,'author is required, must not empty']
  }
}).plugin(uniqueValidator, { message: '{PATH} existed' })

var Article = mongoose.model('Article',articleSchema)

module.exports = Article;