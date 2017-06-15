<template>
  <div>
    <div style="background-color:blue">
      <a href="#">Home</a>
      <a href="#">Register</a>
    </div>
    <div style="border:solid;text-align:left">
      <h2>Login</h2>
      <form class="" method="post">
        <input type="text" name="username" v-model='myLogon.username' placeholder="username"><br>
        <input type="text" name="password" v-model='myLogon.password' placeholder="password"><br>
        <input type="button" value="submit" v-on:click.prevent="login">
      </form>
    </div>

    <h1>{{ msg }}</h1>
    <h2>Articles:</h2>
    <div v-for="article in articles" style="border:solid">
      <div>
        <a href="#">Title: {{article.title}}</a>
      </div>
      <div>
        Category: {{article.category}}
      </div>
      <div>
        Author: {{article.author}}
      </div>
      <div>
        Content: {{article.content}}
      </div>
    </div>
    <br>
    <div style="border:solid;text-align:left">
      <form class="" method="post">
        <input type="text" name="title" v-model='myForm.title' placeholder="Title"><br>
        <input type="text" name="category" v-model='myForm.category' placeholder="Category"><br>
        <input type="text" name="content" v-model='myForm.content' placeholder="Content"><br>
        <input type="hidden" name="author" v-model='myForm.author'><br>
        <input type="button" value="submit" v-on:click.prevent="postArticle">
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Hacktivpress',
      articles: [],
      myForm: {
        title: '',
        category: '',
        author: 'aldy',
        content: ''
      },
      myLogon: {
        username: '',
        password: ''
      },
      user: ''
    }
  },
  methods: {
    getData: function () {
      var self = this
      axios.get(`http://localhost:3000/api/articles`)
      .then((response) => {
        self.articles = response.data
      })
    },
    postArticle: function () {
      var self = this
      axios.post(`http://localhost:3000/api/articles`, self.myForm)
      .then((response) => {
        console.log(response)
        self.getData()
        self.myForm = {
          title: '',
          category: '',
          author: 'aldy',
          content: ''
        }
      })
    },
    login: function () {
      var self = this
      axios.post(`http://localhost:3000/api/users/login`, self.myLogon)
      .then((response) => {
        console.log(response)
        self.getData()
        self.myLogon = {
          username: '',
          password: ''
        }
      })
    }
  },
  created: function () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
