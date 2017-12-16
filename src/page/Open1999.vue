<template>
  <div>
    <h1>Open1999</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    let apiUrl =
      "http://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery";

    axios({
        url: apiUrl,
        headers: { Accept: 'application/json' },
        credentials: 'same-origin',
        method: 'GET',
      })
      .then(response => {
        return response.data;
      })
      .then(data => {
        this.users = data;
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

