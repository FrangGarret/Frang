<template>

	<div class="wrapper background_f1f1f1">
		<ul class="content">
			<li v-for="i in 8">
				<div class="Month_list">
					<p class="Month_title">2018.06</p>
					<div class="thisstoryTaskGroup">
						<div class="whistoryWHM">
							<p class="whistoryone">06.11-06.17</p>
							<p>目标3天，每天8000步</p>
							<span class="Completion_situation" v-if="false">达成<i>0</i>天,还剩<i>3</i>天</span>
							<span class="Completion_situation Completion_situation_scuess" v-if=""><i class="icon iconfont icon-wancheng"></i>已完成</span>
						</div>
						<ul class="week_ul">
							<li v-for="i in 7" class="weeks_li">
								<span class="few_weeks" :class="datas ? 'current' : '' ">周一</span>
								<span class="">{{steps}}</span>
								<span class="" v-text="texts">-</span>
							</li>
						</ul>
					</div>
				</div>
			</li>
		</ul>
	</div>

</template>

<script>
	import BScroll from 'better-scroll'

	export default {
		data() {
			return {
				datas:true,
				steps:'10000',
				texts:'已完成'
			}
		},
		methods: {
			fun1() {
				let wrapper = document.querySelector('.wrapper')
				let scroll = new BScroll(wrapper, {
					click: { // 点击事件
						type: Boolean,
						default: true
					}
				})
			}
		},
		mounted() {
			this.fun1()
		}
	}
</script>

<style scoped="scoped">
	.wrapper {
		height: calc(100vh - 71px);
		overflow: hidden;
		padding-bottom: 71px;
		box-sizing: border-box;
	}
	
	.Completion_situation_scuess {
		color: #2cca6e;
	}
	
	.icon-wancheng {
		margin-right: 10px;
	}
	
	.weeks_li {
		display: flex;
		flex-flow: row;
		justify-content: space-between;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		border-top: 1px solid #ccc;
	}
	
	.week_ul {
		margin: 10px 15px;
	}
	
	.whistoryWHM {
		position: relative;
		margin: 15px;
	}
	
	.Completion_situation {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}
	
	.whistoryone {
		font-weight: 500;
		font-size: 15px;
		color: #000;
		margin: 10px 0;
	}
	
	.thisstoryTaskGroup {
		padding: 10px 0;
		background: #fff;
		margin-bottom: 10px;
	}
	.Month_list{
		margin-bottom: 10px;
	}
	.Month_title{
		margin:15px;
		font-size: 13px;
		color: #666;
	}
	.few_weeks.current{
		color: #FD5E03;
	}
</style>