<template>
  <div class="container">
    <h1>counter page</h1>
    <p>{{ count }}</p>
    <button @click="actionIncrease(5)">add</button>
    <button @click="actionDecrease(5)">decrease</button>
  </div>  
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
    ...mapGetters({
      count: "getCount"
    })
  },
  methods: {
    summit() {

    },
    ...mapActions(["actionIncrease","actionDecrease"])
  }
};
</script>