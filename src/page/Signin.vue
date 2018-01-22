<template lang="pug">

  div.signin-container
    h1 登入
    div.signin-form
      div
        input.form-input(type="text" v-model="account" placeholder="type email")
      div
        input.form-input(type="password" v-model="passowrd" placeholder="type password")
      div.form-btn(@click="onSubmit") 送出 

</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      account: 'test1@gmail.com',
      passowrd: 'a123456'
    };
  },
  computed: {
    ...mapGetters({
      idToken :'getIdToken'
    })
  },
  methods: {
    ...mapActions(['actionSignIn']),
    onSubmit() {

      const formData = {
        email: this.account,
        password: this.passowrd
      };

      this.actionSignIn(formData)
          .then( res => console.log(res) )
          .catch( err => console.log(err) )
    },
  }
};
</script>

<style lang="sass">
.signin-container
  padding: 50px 0
</style>
