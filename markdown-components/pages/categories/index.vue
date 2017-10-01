<template>
<div>
  <h1> Article Categories </h1>
  <ul>
    <li v-for="category in categories">
      <nuxt-link :to="{ name: 'categories-slug', params: { slug: category } }">{{ category }}</nuxt-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  async asyncData ({ app }) {
    const CategoriesArray = []
    var Posts = await app.$content('/').getAll()

    Posts.map((post) => {
      return post.categories.map((category) => {
        CategoriesArray.push(category)
      })
    })

    return {
      posts: await app.$content('/').getAll(),
      categories: [ ...new Set(CategoriesArray) ]
    }
  }
}
</script>
