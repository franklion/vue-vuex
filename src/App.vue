<template lang="pug">
  div#app
    app-nav
    router-view
</template>

<script>
import appNav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    'app-nav' : appNav
  }
}
</script>

<style lang="sass">
@import "assets/sass/form.sass";

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
