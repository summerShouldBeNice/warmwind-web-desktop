import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';
import './styles/index.less';
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router';

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.use(Antd)
app.mount('#app')
