<template lang="pug">
  .control-panel

    h1 父元件的資料
    .color-list
      .color-item(v-for="color in colors") {{ color }}

    h1 子元件的資料
    colors(:propsColors="colors" v-if="colors")

    hr

    button(@click="actionChangeColor") 修改
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import colors from '@/components/Colors.vue'

  export default {
    name: 'controlPanel',
    data() {
      return { }
    },
    computed: {
      ...mapGetters({
        colors: 'getColors'
      })
    },
    components: {
      colors
    },
    methods: {
      ...mapActions(['actionChangeColor', 'actionInitColors'])
    },
    mounted() {
      this.actionInitColors()
    }
  }
</script>
