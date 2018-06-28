import Vue from 'vue'
import Router from 'vue-router'
//首页组件库
import Index from '@/components/index/index'
import Index_warp from '@/components/index/Index_warp'
import photoList from '@/components/index/photoList'
import weekDataList from '@/components/index/weekDataList'
import New from '@/components/index/new'
//import Record from '@/components/record/record.vue'
//我的奖励组件库
import Options from '@/components/options/options.vue';
import Options_warp from '@/components/options/options_warp.vue'
import Location from '@/components/options/Location.vue'

import Personal from '@/components/Personal/Personal.vue'
import Home from '@/components/home'
Vue.use(Router)
Router.prototype.goBack = function () { 
　　this.isBack = true
　　window.history.go(-1)
}

let router = new Router({
	linkActiveClass: 'is-active',
	routes: [{
			path: '/', 
			redirect: '/Index_warp'
		},
		{
			path: '/Index_warp',
			component: Index_warp,
			children: [
				{
					path: '',
					name: 'Index_warp',
					component: Index
				},
				{
					path: 'photoList',
					name: 'photoList',
					component: photoList
				},
				{
					path: 'weekDataList',
					name: 'weekDataList',
					component: weekDataList
				},
				{
					path: 'New',
					name: 'New',
					component: New
				}
			]
		},
		{
			path: '/Options_warp',
			component: Options_warp,
			children: [{
					path: '',
					name: 'Options_warp',
					component: Options
				},
				{
					path: 'Location',
					name: 'Location',
					component: Location,
					children: []
				}
				
			]
		},
		{
			path: '/Personal',
			name: 'Personal',
			component: Personal
		}
	],
	methods:{
		
	},
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}

})



export default router