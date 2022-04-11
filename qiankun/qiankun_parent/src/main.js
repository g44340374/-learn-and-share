import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'JavaScript or jquery',
    entry: '//localhost:5500/qiankun/js/',
    container: '#javascript',
    activeRule: '/javascript',
  },
  {
    name: 'vue2',
    entry: '//localhost:3001/',
    container: '#vue_child',
    activeRule: '/vue_child',
  },
]);
// 启动 qiankun
start();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
