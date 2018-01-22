<template lang="pug">
  div.app-nav
    router-link.link(to="/") Home
    router-link.link(to="/counter") Counter
    router-link.link(to="/users") Users
    router-link.link(to="/controlpanel") ControlPanel
    router-link.link(to="/signin") SignIn
    router-link.link(to="/signup") SignUp
    router-link.link(to="/foods") Foods
    router-link.link(to="/open1999") Open1999
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
  display: flex
  justify-content: center
  align-items: center
  flex-direction: row
  flex-wrap: wrap
  
  .link
    color: #000
    display: inline-block
    margin: 0 10px

</style>
