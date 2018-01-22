<template lang="pug">
  div.foods-container
    div.foods-container-content(v-if="isValidAuth")
      h1 食物列表
      div.list-container
        ul.list-ul
          li(v-for="(food,index) in foods" :key="index") {{ food.id }} - {{ food.name }}
    h3(v-else) Sorry! 你沒有權限觀看食物列表，請先登入！    
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      isValidAuth : false
    }
  },
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
        .then( res => {
          this.isValidAuth = true
          console.log(res)
        } )
        .catch( err => {
          this.isValidAuth = false
          console.error(err)
        })
  }
}
</script>


<style lang="sass" scoped>
.foods-container
  padding: 50px 0

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