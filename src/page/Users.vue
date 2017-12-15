<template>
  <div>
    <h1>Users Page</h1>
    <p>使用axios呼叫fake json api</p>
    <div class="list-container">
      <ul class="list-ul">
        <li v-for="(user,index) in users" :key="index">{{ (index+1) + '. ' + user.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      users: null
    }
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.data
      })
      .then(data => {
        this.users = data
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }
};
</script>

<style lang="sass">
.list-container
  .list-ul
    width: 190px
    margin: 0 auto
    text-align: left
    list-style-type: none
    display: flex
    flex-direction: column
    padding: 0
</style>
