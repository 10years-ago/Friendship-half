import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    burger:true,//topnav的汉堡按钮
    Ccontent:'vue',//组件栏当前栏目
    user:'',//当前用户
    token:'',
    loginOpen:false
  },
  mutations: {
    burgerChange(state,payload){
      payload ? state.burger = payload : state.burger = !state.burger
    },
    CcontentChange(state,payload){
      state.Ccontent = payload
    },
    loginOpenChange(state,payload){
      state.loginOpen = !state.loginOpen
    },
    tokenChange(state,payload){
      state.token = payload
    },
    userChange(state,payload){
      state.user = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
