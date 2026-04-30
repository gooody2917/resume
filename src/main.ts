import { createApp } from 'vue';
import {createBootstrap} from 'bootstrap-vue-next';
import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue';
import Page from './Page.vue';
//import store from './store'


// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import './assets/css/css.scss';
import './assets/css/css-print.scss';


const routes = [
  { path: '/', component: Page },
  { path: '/:lang', component: Page, beforeRouteEnter: ()=>{

    console.log('@@!!@@');

  },},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
    .use(createBootstrap())
//    .use(store)
    .use(router)
    .mount('#app');

