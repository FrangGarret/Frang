import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
// 定义一个容器

let store = new Vuex.Store({
    state: {
      list_num : '0'
    },
    mutations:{
    	fun1Increment(state,payload){
    		state.list_num = payload.n
    	}
    },
    getters:{
    	
    },
    actions:{
    	
    	
    }
    
})

export default store

