import Vue from 'vue'
import Vuex from 'vuex'

import {
  state,
  getters,
  actions,
  mutations
} from './root.js';


import counter from './modules/counter';

Vue.use(Vuex);


export default new Vuex.Store({
  // root
  state,
  actions,
  mutations,
  getters,

  modules: {
    counter
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
});
