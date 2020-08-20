import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios'

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// import {user} from './network/user/request';

// user({
//   url:"/api/user/me",
//   method:'get',
//   headers:{
//     'api_token':'$2y$10$Bm/qew5NQbQKKtdmt2ipBuBMjp7vJ76oG0hFnsgBplDDicXA7cZAa'
//   }
// })
// .then(res => {
//   console.log(res)
// })
// .catch(err =>{
//   console.log(err)
// })


