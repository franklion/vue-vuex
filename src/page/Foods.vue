<template lang="pug">
  div
    h1 Welcome to Foods Page
    div.list-container
      ul.list-ul
        li(v-for="(food,index) in foods" :key="index") {{ food.id }} - {{ food.name }}
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      idToken :'getIdToken',
      foods: 'getFoods'
    })
  },
  methods: {
    ...mapActions(['actionFetchFoods']),
  },
  mounted() {
    this.actionFetchFoods( this.idToken )
        .then( res => console.log(res) )
        .catch( err => console.error(err) )
  }
}
</script>


<style lang="sass" scoped>
.list-container
  .list-ul
    width: 190px
    margin: 0 auto
    text-align: left
    list-style-type: none
    display: flex
    flex-direction: column
    padding: 10px 15px
    border: 1px solid rgba(0,0,0,.2)
</style>