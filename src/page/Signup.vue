<template lang="pug">

  div.signup-container
    h1 註冊
    div.signin-form
      div
        input.form-input(type="text" v-model="account" placeholder="type email")
      div
        input.form-input(type="password" v-model="passowrd" placeholder="type password")
      div
        input.form-input(type="password" v-model="rePassword" placeholder="type password again")
      div.form-btn(@click="onSubmit") submit

</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      account: '',
      passowrd: '',
      rePassword: ''
    };
  },
  methods: {
    ...mapActions(['actionSignUp']),
    isValidAccount() {
      return new Promise((resolve, reject) => {
        const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
        return emailRule.test(this.account) ? resolve() : reject('account format must be email!')
      })
    }, 
    isValidPassword() {
      return new Promise((resolve, reject) => this.passowrd ? resolve() : reject('password can not be empty!'))
    },
    isValidRePassword() {
      return new Promise((resolve, reject) => this.passowrd === this.rePassword ? resolve() : reject('password and repassword is not the same!'))
    },
    onSubmit() {

      const formData = {
                          email: this.account,
                          password: this.passowrd,
                      };

      Promise.resolve()
             .then( () => this.isValidAccount() )
             .then( () => this.isValidPassword() )
             .then( () => this.isValidRePassword() )
             .then( () => this.actionSignUp(formData) )
             .then( res => console.log(res) )
             .catch( err => console.error(err) )
    }
  }
};
</script>

<style lang="sass">
.signup-container
  padding: 50px 0
</style>

