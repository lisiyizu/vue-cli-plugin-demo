<template>
  <div class="welcome">
    <div class="logo-wrapper">
      <ItemLogo image="/public/vue-logo.png" class="logo vuejs" />
    </div>
    <h1>Hello World!</h1>
    <div>
      <p>This is a sample hello world widget. I am just another vue component being
        displayed as a widget!</p>
    </div>
  </div>
</template>

<script>
    export default {
        inject: [
            'widget'
        ],
        created () {
            this.tipIcons = [
                'dashboard',
                'arrow_back', 
                'home'
            ]
        }
    }
</script>

<style scoped>
.welcome {
    margin: 30px;
}
</style>
