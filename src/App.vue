<template lang="pug">
  div#app
    app-nav
    app-loading(v-if="loading")
    router-view
</template>

<script>
import { mapGetters } from 'vuex'
import appNav from './components/Nav.vue'
import appLoading from './components/Loading.vue'

export default {
  name: 'app',
  components: {
    'app-nav' : appNav,
    'app-loading' : appLoading
  },
  computed: mapGetters({
    // 取得 loading state
    loading: 'getLoading',
  }),
}
</script>

<style lang="sass">
@import "assets/sass/form.sass"
@import "assets/sass/loading.sass"

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
