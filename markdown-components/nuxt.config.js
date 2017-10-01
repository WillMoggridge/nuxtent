const axios = require('axios')
console.log(axios);
var _ = require('lodash');
// var RoutesArray = []

module.exports = {
  modules: ['nuxtent'],
  generate: {
    routes () {
      return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          var RoutesArray = []
          res.data.forEach((post) => {
            RoutesArray.push('/article/' + post.slug)
          })
          return RoutesArray
        })
    }
    // routes: function () {
    //   return axios.get('http://localhost:3000/content-api')
    //   .then((res) => {
    //     return res.data.map((post) => {
    //       return '/posts/' + post.slug
    //     })
    //   })
    // }
  }
}
