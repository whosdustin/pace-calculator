<template>
  <div id="app">
    <show-distance />
  </div>
</template>

<script>
import ShowDistance from '@/components/ShowDistance.vue'
export default {
  name: 'app',
  components: {
    ShowDistance
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
