<template lang="pug">

  div.users-container
    h1 使用者名單
    p 使用axios呼叫fake json api
    
    div.list-container
      ul.list-ul
        li(v-for="(user,index) in users" :key="index") {{ (index+1) + '. ' + user.name }}

</template>

<script>
// import axios from "axios";
import { mapGetters, mapActions } from "vuex";


export default {
  data() {
    return {
      // users: null
    };
  },
  computed: {
    ...mapGetters({
      users: 'getUsers'
    })
  },
  methods: {
    ...mapActions(['actionFetchUsers'])
  },
  mounted() {

    // 使用 vuex 取得資料
    this.actionFetchUsers();


    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then(response => {
    //     console.log(response)
    //     return response.data;
    //   })
    //   .then(data => {
    //     this.users = data;
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
};
</script>

<style lang="sass" scoped>
.users-container
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