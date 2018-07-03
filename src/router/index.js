import Vue from 'vue'
import Router from 'vue-router'
//首页组件库
import Index from '@/components/index/index'
import Index_warp from '@/components/index/Index_warp'
import photoList from '@/components/index/photoList'
import travel from '@/components/index/travel'
import phone from '@/components/index/phone'
import somethingsList from '@/components/index/somethingsList'
import someThings from '@/components/index/someThings'


//我的奖励组件库
import Options from '@/components/options/options.vue';
import Options_warp from '@/components/options/options_warp.vue'
import Location from '@/components/options/Location.vue'
import weichat from '@/components/options/weichat.vue'
import zhifubao from '@/components/options/zhifubao.vue'
import weibo from '@/components/options/weibo.vue';
import echarts from '@/components/options/echarts.vue'

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
					path: 'travel',
					name: 'travel',
					component: travel
				},
				{
					path: 'somethingsList',
					name: 'somethingsList',
					component: somethingsList
				},
				{
					path: 'someThings',
					name: 'someThings',
					component: someThings
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
				},
				{
					path: 'weichat',
					name: 'weichat',
					component: weichat,
					children: []
				},
				{
					path: 'weibo',
					name: 'weibo',
					component: weibo,
					children: []
				},
				{
					path: 'zhifubao',
					name: 'zhifubao',
					component: zhifubao,
					children: []
				},
				{
					path: 'echarts',
					name: 'echarts',
					component: echarts,
					children: []
				},
				{
					path: 'phone',
					name: 'phone',
					component: phone
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