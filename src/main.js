import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css';//引入全局样式
import API from '@/api';
import store from "@/store/index";
import router from './router'; import {
  Button, Input, Message, Table,
  TableColumn, Container, Header, Aside, Main, Menu, MenuItem, Submenu, Drawer, Select, Option
} from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Aside.name, Aside);
Vue.component(Main.name, Main);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Submenu.name, Submenu);
Vue.component(Drawer.name, Drawer);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option); 
import VueClipBoard from 'vue-clipboard2'
Vue.use(VueClipBoard)
Vue.prototype.$message = Message;
Vue.prototype.$api = API
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
