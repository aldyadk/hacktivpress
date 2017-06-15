<template>
  <div>
    <h1>{{ msg }}</h1>
    <div v-for="article in articles">
      {{article.title}}
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
      articles: []
    }
  },
  methods: {
    getData: function () {
      var self = this
      axios.get(`http://localhost:3000/api/articles`)
      .then((response) => {
        self.articles = response.data
        console.log(self.articles)
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
