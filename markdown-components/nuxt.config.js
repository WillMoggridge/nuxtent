const axios = require('axios')

module.exports = {
  modules: ['nuxtent'],
  generate: {
    // routes: function () {
    //   return axios.get('http://localhost:3000/content-api')
    //   .then((res) => {
    //     return res.data.map((user) => {
    //       return '/users/' + user.id
    //     })
    //   })
    // }
    routes: [
      'categories/cat1',
      'categories/cat2'
    ]
    // routes: function () {
    //   var RoutesArray = []
    //
    //   return axios.get('http://localhost:3000/content-api')
    //   .then((res) => {
    //     var Posts = res.data
    //     return Posts.map((post) => {
    //       return '/categories/' + post.slug
    //       // return post.categories.map((category) => {
    //       //   RoutesArray.push(category)
    //       // })
    //     })
    //
    //   })
    //   // return RoutesArray
    // }
  }
}
