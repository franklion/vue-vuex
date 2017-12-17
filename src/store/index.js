import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter';

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    counter
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
});
