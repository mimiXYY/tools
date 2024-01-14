import Vue from 'vue'
import App from './App.vue'
import {
  Button, Input, Message, Table,
  TableColumn
} from 'element-ui';
import './assets/css/reset.css';//引入全局样式
import API from '@/api';
import router from './router';
Vue.prototype.$api = API
Vue.config.productionTip = false
Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.prototype.$message = Message;
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
