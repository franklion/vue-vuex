<template lang="pug">
  .color-wrapper
    .color-list
      .color-item(v-for="colorData in colorsData") 
        p {{ colorData.id }} - {{ colorData.name }}   
</template>

<script>
  export default {
    name: 'colors',
    data () {
      return {
        colorsData: this.propsColors,
      }
    },
    props: ['propsColors'],
    watch: {
      propsColors() {
        this.colorsData = this.propsColors;
      }
    }
  }
</script>
