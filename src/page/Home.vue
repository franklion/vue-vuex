<template lang="pug">
  div.home-container
    h1 Welcome to Vue-vuex :)
    img.home-page-cover(:src="cover")
    //- img(src='../assets/images/lion.svg')
    input#datepicker(type="text" v-model="date")
</template>

<script>
// import icon from '../assets/images/lion.svg' // O
// import icon from '@/assets/images/lion.svg' // O

  export default {
    data() {
      return {
        date: 'hello',
        // cover: '../assets/images/lion.svg' // X
        // cover: '/static/images/lion.svg' // O
        // cover: icon
        cover: require('@/assets/images/lion.svg') // O
      }
    },
    mounted() {
        $('.home-page-cover').fadeOut(1500)
        $('#datepicker').datepicker();
    }
  }
</script>


<style lang="sass">
.home-container
  padding: 50px 0
  
.home-page-cover
  width: 100px
  height: auto
</style>

