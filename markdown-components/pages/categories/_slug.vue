<template>
  <div>
    <h1>{{category}}</h1>
    <ul>
      <li v-for="post in posts">
        <nuxt-link :to="post.permalink">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  async asyncData ({ app, route }) {
    const PostsArray = []
    var Posts = await app.$content('/').getAll()

    Posts.map((post) => {
      post.categories.map((category) => {
        if (route.params.slug === category) {
          return PostsArray.push(post)
        }
      })
    })

    return {
      category: route.params.slug,
      posts: PostsArray
    }
  }
}
</script>
