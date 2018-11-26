import Vue from 'vue'
import App from './App.vue'
import router from './router'
<%_ if (i18n) { _%>
import i18n from './i18n'
<%_ } %>

Vue.config.productionTip = false

new Vue({
  router,
  <%_ if (i18n) { _%>
  i18n,
  <%_ } %>
  render: h => h(App)
}).$mount('#app')
