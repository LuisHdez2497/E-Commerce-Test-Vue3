import { createApp } from "vue";
import App from '../src/App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from '../src/store';
import router from '../src/router';
import '../src/assets/css/styles.css';
import 'flowbite';

createApp(App)
    .use(VueAxios, axios)
    .use(router)
    .use(store)
    .mount("#app");