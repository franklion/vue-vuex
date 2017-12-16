import Vue from 'vue'
import Vuex from 'vuex'
import {
  state,
  mutations
} from './mutations.js'
import * as getters from './getters.js'
import * as actions from './actions.js'

// modules 註冊
// import counter from './modules/counter';

Vue.use(Vuex);


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  // 將整理好的 modules 放到 vuex 中組合
  modules: {
    // counter
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
});
