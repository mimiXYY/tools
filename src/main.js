import Vue from 'vue'
import App from './App.vue'
import { Button, Input, Message } from 'element-ui';
import './assets/css/reset.css';//引入全局样式
import API from '@/api';
Vue.prototype.$api = API
Vue.config.productionTip = false
Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.prototype.$message = Message;
new Vue({
  render: h => h(App),
}).$mount('#app')
