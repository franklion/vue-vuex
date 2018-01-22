<template lang="pug">

  div.dashboard-container
    h1 Dash Board
    h3(v-if="userName") Welcome {{ userName }} coming!

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from "axios";

export default {
  computed: {
    ...mapGetters({
      userName : 'getUserName'
    })
  },
  mounted() {
     this.$store.dispatch('fetchUser', this.$store.getters.getIdToken);
  }
}
</script>

<style lang="sass">

</style>

