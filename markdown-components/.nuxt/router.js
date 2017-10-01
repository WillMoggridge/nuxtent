import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _a97cb21a = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _0716b60e = () => import('../pages/categories/index.vue' /* webpackChunkName: "pages/categories/index" */).then(m => m.default || m)
const _056014c6 = () => import('../pages/categories/_slug.vue' /* webpackChunkName: "pages/categories/_slug" */).then(m => m.default || m)
const _ace9f4aa = () => import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _a97cb21a,
			name: "index"
		},
		{
			path: "/categories",
			component: _0716b60e,
			name: "categories"
		},
		{
			path: "/categories/:slug",
			component: _056014c6,
			name: "categories-slug"
		},
		{
			path: "/:slug",
			component: _ace9f4aa,
			name: "slug"
		}
    ],
    fallback: false
  })
}
