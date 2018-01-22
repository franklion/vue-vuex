import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters.js';
import {
  state,
  actions,
  mutations
} from './root.js';


import counter from './modules/counter';
import colors from './modules/colors';
import signIn from './modules/signIn';
import signUp from './modules/signUp';
import foods from './modules/foods';
import users from './modules/users';
import open1999 from './modules/open1999';

Vue.use(Vuex);


export default new Vuex.Store({
  // root
  state,
  getters,
  actions,
  mutations,
  // 將整理好的 modules 放到 vuex 中組合 
  modules: {
    counter,
    foods,
    colors,
    signIn,
    signUp,
    users,
    open1999
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
});
