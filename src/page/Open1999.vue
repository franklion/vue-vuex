<template lang="pug">

  div.open1999-container.container.open1999(:class="{ 'is-loading' : loading }")
    h1.display-3.open1999-title 高雄市政府開放資料 - Open1999
    nav.navbar.navbar-light.bg-light.open1999-nav
      form.form-inline
        select#searchRegion.custom-select.open1999-region-select(v-model="searchRegion")
          option(value='all') 地區
          option(v-for="(option,index) in regionOption" :key="index" :value="option") {{ option }}
        input.form-control.mr-sm-2(type="text" placeholder="Search" aria-label="Search" v-model="searchKeyword" @keydown.enter.prevent="handleWorkSearch")
        button.btn.btn-outline-success.my-2.my-sm-0(type="button" @click="handleWorkSearch") 查詢
    
    div.alert.alert-info(v-if="openData.length === 0" role="alert") 很抱歉！找不要您到的資訊。
    div(v-else)
      div.alert.alert-success(role="alert") 總共查到：{{ openData.length }} 筆資料。
      div.row
        div.col-12.col-sm-12.col-md-6.col-lg-4(v-for="item in openData" :key="item.FileNo_")
          div.card
            div.card-status
              label.btn.btn-danger {{ item.ZipName_  }}
              label.btn.btn-primary {{ item.InformDesc_ }}
              label.btn.btn-warning {{ item.UnitName_ }}
            div.card-body
              h4.card-title {{ item.InformDesc_ }}
              p.card-text {{ item.BeforeDesc_ }}
              p
                a.link(:href="getGoogleMap( item.Lat_, item.Lng_ )" target="_blank") {{ item.address_ }}
              p.card-text.card-data
                small.text-muted 反應日期：{{ item.Cre_Date_ }}

</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      searchRegion: 'all',
      searchKeyword: '',
    }
  },
  computed: {
    ...mapGetters({
      openData: 'getOpenData',
      regionOption: 'getRegionOption',
      loading: 'getLoading',
    }),
  },
  methods: {
    getGoogleMap(lat, lng) {
      return (lat && lng) ? `https://www.google.com/maps/place/${lat},${lng}` : 'javascript:;'
    },
    handleWorkSearch() {
      this.actionSearchKeywordOfOpenData(this.searchKeyword)
    },
    ...mapActions([
      'actionGetOpenData',
      'actionSearchRegionOfOpenData',
      'actionSearchKeywordOfOpenData',
    ]),
  },
  watch: {
    searchRegion(val) {
      this.actionSearchRegionOfOpenData(val)
    },
  },
  mounted() {
    // created Hook 發出 action call API
    this.actionGetOpenData()
      .then((response) => {
        console.log(response)
      })
      .catch((e) => {
        console.log(e)
      })
  },
}
</script>


<style lang="sass">
.open1999
  padding-top: 20px

  &.is-loading
    opacity: 0
  
  .open1999-region-select
    margin-right: 20px

  .open1999-title
    margin-bottom: 3rem
    margin-top: 1rem

.card
  margin-bottom: 30px
  box-shadow: 2px 2px 3px rgba(0, 0, 0, .3)

.card-title
  font-weight: bold

.card-data
  text-align: right

.card-status
  padding: 20px 22px 0
  .btn
    margin-right: 10px

.card-body
  .link
    color: #666

.open1999-nav
  margin-bottom: 20px
  justify-content: flex-end

</style>

