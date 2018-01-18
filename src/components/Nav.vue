<template lang="pug">
  div.app-nav
    router-link.link(to="/") Home
    router-link.link(to="/counter") Counter
    router-link.link(to="/users") Users
    router-link.link(to="/controlpanel") ControlPanel
</template>

<script>
export default {
  name: 'appNav',
  data () {
    return {}
  }
}
</script>


<style lang="sass">
.app-nav
  .link
    color: #000
    display: inline-block
    margin: 0 10px

</style>
