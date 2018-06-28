<template>
	<div class="background_f1f1f1">
		<div class="vux-circle-demo">
			<div class="vux-circle" style='width:200px;height:200px;'>
				<x-circle :percent="percent" :stroke-width="3" :trail-width="1" :stroke-color="['#fff','#fff']" trail-color="#ccc">
					<p class="nums_title">已达成</p>
					<p class="nums">{{days}}天</p>
					<p class="nums_text">还剩3天，每天8000步</p>
				</x-circle>
			</div>
		</div>
		<ul class="weekdata_warp">
			<li v-for="(item,index) in weekData" class="weekdata_li">
				<span class="current_pointer">
					<i v-show="item.checked" class="icon iconfont icon-stop-fill"></i>
					<i v-show="!item.checked" class="icon-stop-fill_empty"></i>
				</span>
				<span class="weekdays">{{item.currentDay}}</span>
				<span class="steps">{{item.steps}}</span>
			</li>
		</ul>
		<router-link :to="{name:'New'}" class="weekHistory" tag="div">
			<span class="">周运动历史</span>
			<span class="icon iconfont icon-fanhui-copy-copy"></span>
		</router-link>
	</div>
</template>

<script>
	import { XCircle } from 'vux'

	export default {
		components: {
			XCircle
		},
		data() {
			return {
				percent: 50,
				days: 2,
				weekData:[
					{
						checked:false,
						currentDay:'周一',
						steps:'0'
					},
					{
						checked:false,
						currentDay:'周二',
						steps:'0'
					},
					{
						checked:true,
						currentDay:'周三',
						steps:'0'
					},
					{
						checked:false,
						currentDay:'周四',
						steps:'0'
					},
					{
						checked:false,
						currentDay:'周五',
						steps:'0'
					},
					{
						checked:false,
						currentDay:'周六',
						steps:'0'
					},
					{
						checked:false,
						currentDay:'周日',
						steps:'0'
					}
				]
				
			}
		}
	}
</script>

<style>
	.vux-circle-demo {
		padding: 20px;
		text-align: center;
		background: url(../../assets/img/bg.png);
		background-size: cover;
	}
	
	.vux-circle-demo>div {
		margin: 0 auto;
	}
	
	.nums {
		color: #FFFFFF;
		font-size: 24px;
		margin: 15px 0;
	}
	
	.nums_title,
	.nums_text {
		font-size: 12px;
		color: #fff;
	}
	.weekdata_warp{
		display: flex;
		flex-flow: row;
		background: #FFFFFF;
	}
	.weekdata_li{
		flex: 1;
		display: flex;
		flex-flow: column;
		text-align: center;
	}
	.current_pointer,.weekdays,.steps{
		height: 30px;
		line-height: 30px;
	}
	.icon-stop-fill_empty{
		display: inline-block;
		width: 14px;
		height: 14px;
		margin-top: 6px;
		border: 1px solid #ccc;
		border-radius: 50%;
	}
	.icon-stop-fill{
		color: #FD5E03;
	}
	.weekHistory{
		height: 50px;
		line-height: 50px;
		padding: 15px;
		font-size: 16px;
		background: #fff;
		margin-top: 10px;
	}
  .icon-fanhui-copy-copy{
  	float: right;
  }
</style>