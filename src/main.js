import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vueAxios from 'vue-axios'
import router from './router'
import store from './store'
import instance_ from './api/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.instance = instance_
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App),
  components:{App}
}).$mount('#app')
