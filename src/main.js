import Vue from 'vue'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import Main from './components/Main.vue';
import RecipesList from './components/RecipesList.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(ElementUI);

const routes = [
  { path: '/', component: Main },
  { path: '/recipes', component: RecipesList }
];

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
