<template>
	<div class="background_f1f1f1">
		<ul class="ul_list">
			<router-link v-for="(item,index) in dataList" :key='item.index' class="li_list" :to="{name:item.routers}" tag="li">
				<span class="iconfont" :class="item.iconfontClass"></span>
				<p class="title">{{item.title}}</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
	 const lists=[
	 	{
	 		title:'Home',
	 		iconfontClass:'icon-home',
	 		routers:'Index_warp'
	 	},
	 	{
	 		title:'Message',
	 		iconfontClass:'icon-message',
	 		routers:''
	 	},
	 	{
	 		title:'WChat',
	 		iconfontClass:'icon-weixin',
	 		routers:'weichat'
	 	},
	 	{
	 		title:'location',
	 		iconfontClass:'icon-dingweiweizhizuobiaomianxing',
	 		routers:'Location'
	 	},
	 	{
	 		title:'Case',
	 		iconfontClass:'icon-xuanxiang',
	 		routers:'echarts'
	 	},
	 	{
	 		title:'Phone',
	 		iconfontClass:'icon-shouji',
	 		routers:'phone'
	 	},
	 	{
	 		title:'YaoYiYao',
	 		iconfontClass:'icon-yaoyiyao',
	 		routers:''
	 	},
	 	{
	 		title:'Alipay',
	 		iconfontClass:'icon-zhifubao',
	 		routers:'zhifubao'
	 	},
	 	{
	 		title:'WeiBo',
	 		iconfontClass:'icon-weibo',
	 		routers:'weibo'
	 	}
	 ]
	
	export default {
		data(){
			return{
				dataList:lists
			}
		},
		methods: {
			 

		}
	}
</script>

<style scoped="scoped">
	.ul_list{
		display: flex;
		flex-flow: row;
		flex-wrap:wrap;
		/*justify-content:space-around;*/
	}
	.li_list{
		width: 33.3333%;
		height: 80px;
		text-align: center;
		color: #fff;
		padding: 10px;
		box-sizing: border-box;
	}
	.iconfont{
		font-size: 30px;
	}
	.title{
		font-size: 14px;
		margin-top: 10px;
	}
</style>