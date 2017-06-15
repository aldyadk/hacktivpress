var mongoose = require('mongoose');
var url = 'mongodb://localhost/hacktivpress'
mongoose.connect(url);
const User = require('../models/user');
const simplecrypt = require('simplecrypt');

module.exports = {
  getAll:(req,res)=>{
    User.find((err,data)=>{
      if(data.length>0){
        res.send(data)
      } else {
        res.send('currently there are no user available')
      }
    });
  },
  getOne: (req,res)=>{
    User.find({_id:req.params.id},(err,user)=>{
      if(!err){
        res.send(user)
      } else {
        res.send('user not found')
      }
    })
  },
  create:(req,res)=>{
    if(req.body.password){password=simplecrypt({password:'secret'}).encrypt(req.body.password)}else{password=req.body.password}
    let user = new User({
      username:req.body.username,
      password:password
    })
    user.save((err,resultUser)=>{
      if(!err){
        res.send(resultUser)
      } else {
        res.send(err.message)
      }
    })
  },
  login:(req,res)=>{
    User.find({username:req.body.username},(err,user)=>{
      if(user.length!==0){
        if(req.body.password == simplecrypt({password:'secret'}).decrypt(user.password)){
          res.send(user)
        } else {
          res.send('password is wrong')
        }
      } else {
        res.send('username not found')
      }
    });
  },
  remove:(req,res)=>{
    User.find({_id:req.params.id},(err,user)=>{
      if(user.length!==0){
        User.remove({_id:req.params.id},(err,result)=>{
          if(user.length==0){
            res.send('user has already deleted')
          } else {
            res.send(`Successfully delete user with id ${req.params.id} from collection`)
          }
        })
      } else {
        res.send('there\'s no such ID')
      }
    })
  }
};