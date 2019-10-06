import 'babel-polyfill'
import Vue from 'vue'
import VueFetch ,{$fetch}  from './plugins/fetch.js'
import App from './components/App.vue'
import router from './router.js'
import * as filters from './filters.js'
import store from './state'

for(const key in filters){
	Vue.filter(key,filters[key])
}

Vue.use(VueFetch,{
	baseUrl:'http://localhost:3000/'
})

function main(){
	new Vue({
		...App,
		el:'#app',
		router,
		store,
	})
}

main()