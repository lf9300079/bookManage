import Vue from 'vue'
import App from '../App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    isLogin: false,
    token: '',
    menus: [],

  },
  mutations: {
    saveUser(state,user) {
      state.isLogin = true;
      state.user = user;
      sessionStorage.setItem("user", JSON.stringify(user));
    },
    update(state, isLogin) {
      state.isLogin = isLogin;
    },
    saveToken(state, token) {
      state.token = token;
      sessionStorage.setItem("token", token);
    },
    saveMenus(state, menuPath) {
      state.menus.push(menuPath)
    }


  },
  actions: {

  },
  getters: {
  }


})
