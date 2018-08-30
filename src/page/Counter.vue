<template lang="pug">

  div.counter-container
    h1 計數器
    p {{ count }}
    button.btn.btn-primary(@click="actionIncrease(5)") add
    button.btn.btn-primary(@click="actionDecrease(5)") decrease
    button.btn.btn-primary(@click="actionReset()") reset

</template>

<script>
// 引用 vuex
// mapActions 在 computed 中使用，提取 action 函式的方法，使用函式名稱
// mapGetters 在 methods 中使用，提取 getter 函式的方法，可以利用物件 key: value 方式取別名
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters('counter', {
      count: "getCount"
    })
  },
  methods: {
    ...mapActions('counter', ["actionIncrease","actionDecrease", "actionReset"])
  }
};
</script>

<style lang="sass">
.counter-container
  padding: 50px 0

  .btn
    display: inline-block
    margin: 0 5px
</style>
