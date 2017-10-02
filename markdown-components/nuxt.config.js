const axios = require('axios')
console.log(axios);
var _ = require('lodash');
var CategoriesArray = ['/categories/cat1', '/categories/cat2']

module.exports = {
  modules: ['nuxtent'],
  nuxtent: {
    content: {
      page: '/_slug',
      permalink: '/:slug',
      isPost: false,
      generate: ['get', 'getAll']
    }
  },
  generate: {
    routes: CategoriesArray
  }
}
