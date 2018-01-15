<template>
   <div>

     <h1>Sign Up</h1>
     <div class="signin-form">
       <div>
       <input type="text" class="form-input" v-model="account">
     </div>
     <div>
       <input type="password" class="form-input" v-model="passowrd">
     </div>
     <div class="form-btn" @click="onSubmit">submit</div>
     </div>
     
   </div>
</template>


<script>
import { eventBus } from "../main.js";

export default {
  data() {
    return {
      account: "franklion1227@gmail.com",
      passowrd: "banana999"
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.account,
        password: this.passowrd,
      };

      // this.$store.dispatch('actionTest')

      this.$store.dispatch('actionSignup', {
        email: formData.email,
        password: formData.password,
      })
    }
  }
};
</script>

<style lang="sass">

</style>

