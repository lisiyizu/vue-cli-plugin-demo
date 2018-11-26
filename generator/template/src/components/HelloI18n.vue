<template>
  <p>{{ l.k1 }}</p>
</template>
<script>
export default {
  computed: {
    l () {
      return this.$$i18n.messages[this.$$i18n.locale].page['baseinfo.dict']
    }
  },
  mounted () {
    console.log(this.page)
  }
}
</script>
