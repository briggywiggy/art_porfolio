
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 import Vue from 'vue'
 import VueRouter from 'vue-router'
 import Vuex from 'vuex'
 import axios from 'axios'

 Vue.use(VueRouter)
 Vue.use(Vuex);
 Vue.use(axios)

 import App from './components/App'
 import Home from './components/Home'
 import Gallery from './components/Gallery'
 import PageNotFound from './components/PageNotFound'

 const router = new VueRouter({
 	mode: 'history',
 	linkActiveClass: 'active',
 	linkExactActiveClass: "exact-active",
 	routes: [
 	{ path: '/', name: 'home', component: Home },
 	{ path: '/gallery', name: 'gallery', component: Gallery },
 	{ path: '*', name: 'pagenotfound', component: PageNotFound },
 	]
 })

 const store = new Vuex.Store ({
 	debug: true,
 	state: {
 		message: 'Hello!',
 		offCanvas: false,

 		//Room
 		DOM: {},
 		currentRoom: null,
 		totalRooms: null,
 		initTransform: {},
 		resetTransform: {},
 		menuTransform: {},
 		infoTransform: {},
 		initTransition: {},
 		roomTransition: {},
 		menuTransition: {},
 		infoTransition: {},
 		tiltTransition: {},
 		tilt: null,
 		tiltRotation: {},
 		win: {},
 		isMoving: null,
 		isNavigating: null,
 	}
 })

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 //Global Components
 import Preloader from './components/Preloader.vue'

 Vue.component('preloader', Preloader);

 const app = new Vue({
 	el: '#app',
 	router,
 	store,
 	render: h => h(App)
 });
