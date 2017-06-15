var mongoose = require('mongoose');
var url = 'mongodb://localhost/hacktivpress'
mongoose.connect(url);
const Article = require('../models/article');

module.exports = {
  getAll:(req,res)=>{
    Article.find((err,data)=>{
      if(data.length>0){
        res.send(data)
      } else {
        res.send('currently there are no article available')
      }
    });
  },
  getOne: (req,res)=>{
    Article.find({_id:req.params},(err,article)=>{
      if(!err){
        res.send(article)
      } else {
        res.send('article not found')
      }
    })
  },
  create:(req,res)=>{
    let article = new Article({
      title:req.body.title,
      content:req.body.content,
      category:req.body.category,
      author:req.body.author
    })
    article.save((err,resultArticle)=>{
      if(!err){
        res.send(resultArticle)
      } else {
        res.send(err.message)
      }
    })
  },
  update:(req,res)=>{
    Article.findById(req.params.id,(err,article)=>{
      if(!err){
        article.title=req.body.title||article.title,
        article.content=req.body.content||article.content,
        article.category=req.body.category||article.category,
        article.save((err,updatedArticle)=>{
          if(!err){
            res.send(updatedArticle)
          } else {
            res.send(err.message)
          }
        })
      } else {
        res.send(err.message)
      }
    })
  },
  remove:(req,res)=>{
    Article.deleteOne({_id:req.params.id},(err,result)=>{
      if(!err){
        res.send(`Successfully delete article with id ${req.params.id} from collection ${result}`)
      } else {
        res.send('there\'s no such ID')
      }
    })
  },
  getByAuthor:(req,res)=>{
    Article.find({author:req.params.author},(err,result)=>{
      if(!err){
        res.send(`Successfully delete article with id ${req.params.author} from collection ${result}`)
      } else {
        res.send('there\'s no such author')
      }
    })
  },
  getByCategory:(req,res)=>{
    Article.find({category:req.params.category},(err,result)=>{
      if(!err){
        res.send(`Successfully delete article with id ${req.params.category} from collection ${result}`)
      } else {
        res.send('there\'s no such category')
      }
    })
  }
};