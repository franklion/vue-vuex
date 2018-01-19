import Vue from 'vue'
import Vuex from 'vuex'


import counter from './modules/counter';
import colors from './modules/colors';
import signIn from './modules/signIn';
import foods from './modules/foods';
import users from './modules/users';

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    counter,
    foods,
    colors,
    signIn,
    users
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
});
