import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<%_ if (i18n) { _%>
import helloi18n from './components/HelloI18n.vue'
<%_ } _%>
import helloword from './components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    <%_ if (i18n) { _%>
    {
      path: '/HelloI18n',
      name: 'HelloI18n',
      component: helloi18n
    },
    <%_ } _%>
    {
      path: '/HelloWord',
      name: 'HelloWord',
      component: helloword
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
