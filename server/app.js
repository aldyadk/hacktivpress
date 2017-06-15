const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const users = require('./routes/users');
const articles = require('./routes/articles');
const cors = require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.use('/api/users',users)
app.use('/api/articles',articles)


app.listen(app.get(3000),()=>{
  console.log('server udah jalan cuy!');
})