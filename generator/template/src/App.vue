<template>
  <div id="app">
    <h1>
      <%=loginStyle%>
    </h1>
    <div>
      <div class="locale-changer">
        <%_ if (i18n) { _%>
        <select v-model="$$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
        </select>
        <%_ } else { _%>
           <h3>未选择国际化!!!</h3>
        <% } %>
      </div>
    </div>
    <div id="nav">
       <%_ if (i18n) { _%>
        <router-link to="/">{{ $t('home') }}</router-link> |
        <router-link to="/about">{{ $t('about') }}</router-link>
        <router-link to="/HelloI18n">{{ $t('message') }}</router-link>
       <%_ } else { _%>
        <router-link to="/">首页</router-link> |
        <router-link to="/about">关于</router-link>
        <router-link to="/helloworld">你好</router-link>
       <%_ } _%>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return { langs: ['cn', 'en'] }
  }
}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
