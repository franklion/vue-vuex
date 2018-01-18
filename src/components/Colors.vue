<template lang="pug">
  .color-wrapper
    .color-list
      .color-item(v-for="color in propsColors") {{ color.name }}

    input(type="text" v-model="c")
</template>

<script>
  export default {
    name: 'colors',
    data () {
      return {
        c: this.propsColors[0].name,
        id: '',
      }
    },
    props: ['propsColors'],
    // computed: {
    //   id() {
    //     return this.c.id
    //   }
    // },
    // watch: {
    //   propsColors() {
    //     console.log('change')
    //     // { id: 1, name: blue }
    //     this.c = this.propsColors
    //   }
    // },
    // mounted() {
    //   this.c = this.propsColors
    // }
  }
</script>
