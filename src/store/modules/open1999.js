import axios from 'axios'

// root types
import * as rootTypes from '../mutations_types.js';

const types = {
  OPEN_1999: 'environment/OPEN_1999',
  OPENDATA_SEARCH_REGION: 'environment/OPENDATA_SEARCH_REGION',
  OPENDATA_SEARCH_KEYWORD: 'environment/OPENDATA_SEARCH_KEYWORD',
}


const state = {
  openData: [],
  regionOption: ["三民區", "仁武區", "內門區", "六龜區", "前金區", "前鎮區", "大寮區", "大樹區", "大社區", "小港區", "岡山區", "左營區", "彌陀區", "新興區", "旗山區", "旗津區", "杉林區", "林園區", "桃源區", "梓官區", "楠梓區", "橋頭區", "永安區", "湖內區", "燕巢區", "田寮區", "甲仙區", "美濃區", "苓雅區", "茂林區", "茄萣區", "路竹區", "那瑪夏區", "阿蓮區", "鳥松區", "鳳山區", "鹽埕區", "鼓山區"],
  search: {
    region: 'all',
    keyword: ''
  }
}


const getters = {
  getRegionOption: state => state.regionOption,
  getOpenData: state => {
    let _openData = state.openData;

    if (state.search.region !== 'all') {
      _openData = _openData.filter( item => (item.ZipName_ === state.search.region) );
    }

    if(state.search.keyword !== '') {
      _openData = _openData.filter( item => { 
        // console.log(JSON.stringify(item))
        return JSON.stringify(item).indexOf( state.search.keyword ) != -1 
      })
    }
    return _openData
  },
}


const actions = {
  actionGetOpenData({ commit }) {
    // 啟動 loading
    commit(rootTypes.LOADING, true);

    return new Promise((resolve, reject) => {

      axios({
        url: 'https://franklion-resume.herokuapp.com/api/open1999',
        headers: {
          Accept: 'application/json',
        },
        method: 'GET',
      })
      .then(response => {

        commit(types.OPEN_1999, response.data)

        // 關閉 loading
        commit(rootTypes.LOADING, false);
      })
      .catch(err => {
        console.log(err)

        // 關閉 loading
        commit(rootTypes.LOADING, false);
      })  
    })
  },

  actionSearchRegionOfOpenData({ commit }, region) {
    commit(types.OPENDATA_SEARCH_REGION, region);
  },

  actionSearchKeywordOfOpenData({ commit }, keyword) {
    commit(types.OPENDATA_SEARCH_KEYWORD, keyword);
  },

}


const mutations = {
  [types.OPEN_1999](state, openData) {
    state.openData = openData
  },
  [types.OPENDATA_SEARCH_REGION](state, region) {
    state.search.region = region;
  },
  [types.OPENDATA_SEARCH_KEYWORD](state, keyword) {
    state.search.keyword = keyword;
  },
}


export default {
  state,
  getters,
  actions,
  mutations
}
