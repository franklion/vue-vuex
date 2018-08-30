<template lang="pug">
  div.home-container
    input(type="file" @change="onFileChanged")
    button(@click="onUpload") Upload!
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      selectedFile: null
    }
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0]
      console.log(this.selectedFile)
    },
    onUpload() {
      const uploadPath = ''
      const formData = new FormData()
      formData.append('myFile', this.selectedFile, this.selectedFile.name)
      axios.post(uploadPath, formData)
    }
  }
}
</script>


<style lang="sass">

</style>

