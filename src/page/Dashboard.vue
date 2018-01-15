<template>
  <div>
    <h1>Dash Board</h1>
    <h3 v-if="userName">Welcome {{ userName }} coming!</h3>
  </div>
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

