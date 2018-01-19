<template>
   <div>
    <h1>Sign In</h1>
     
    <div class="signin-form">
      <div>
        <input type="text" class="form-input" v-model="account" placeholder="type email">
      </div>
      <div>
        <input type="password" class="form-input" v-model="passowrd" placeholder="type password">
      </div>
      <div class="form-btn" @click="onSubmit">submit</div>
    </div>     
   </div>
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

</style>
