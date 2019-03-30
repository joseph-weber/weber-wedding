// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Accomodations from './components/Accomodations.vue';
Vue.component('Accomodations', Accomodations);
import Activities from './components/Activities.vue';
Vue.component('Activities', Activities);
import MyHeader from './components/MyHeader.vue';
Vue.component('MyHeader', MyHeader);
import NavBar from './components/NavBar.vue';
Vue.component('NavBar', NavBar);
import ImagesCarousel from './components/ImagesCarousel.vue';
Vue.component('ImagesCarousel', ImagesCarousel);
import Groomsmen from './components/Groomsmen.vue';
Vue.component('Groomsmen', Groomsmen);
import Bridesmaids from './components/Bridesmaids.vue';
Vue.component('Bridesmaids', Bridesmaids);
import Couple from './components/Couple.vue';
Vue.component('Couple', Couple);
import Modal from './components/Modal.vue';
Vue.component('Modal', Modal);
import Destination from './components/Destination.vue';
Vue.component('Destination', Destination);
import MyFooter from './components/MyFooter.vue';
Vue.component('MyFooter', MyFooter);
import Registry from './components/Registry.vue';
Vue.component('Registry', Registry);
import Schedule from './components/Schedule.vue';
Vue.component('Schedule', Schedule);
import './styles/global.scss'
import { bus } from './Events.js';
Vue.config.productionTip = false
import jQuery from 'jQuery'
window.jQuery = jQuery
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

