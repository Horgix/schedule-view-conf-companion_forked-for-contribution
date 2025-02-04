import Vue from 'vue';
import App from './App.vue';
import router from './router'

Vue.config.productionTip = false;

//branding = "publicis-sapient"

Vue.filter('truncate', function (text: string, stop: number) {
    return text.slice(0, stop) + (stop < text.length ? '...' : '')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
