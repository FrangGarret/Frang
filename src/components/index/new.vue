<template>
	<div>
		<scroller lock-x style="height: 100vh;box-sizing: border-box;padding-bottom: 71px;overflow: hidden;"  @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
			<div class="box2">
				<ul class="content">
					<li v-for="i in bottomCount">
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
										<span class="few_weeks">周一</span>
										<span class="">-</span>
										<span class="" v-text="">-</span>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
				<load-more tip="loading"></load-more>
			</div>
		</scroller>
	</div>
</template>
<script>
	import { Scroller, LoadMore } from 'vux'

	export default {
		components: {
			Scroller,
			LoadMore
		},
		data() {
			return {
				showList1: true,
				scrollTop: 0,
				onFetching: false,
				bottomCount: 3
			}
		},
		mounted() {
//			this.$nextTick(() => {
//				this.$refs.scrollerEvent.reset({
//					top: 0
//				})
//			})
//			this.$nextTick(() => {
//				this.$refs.scrollerBottom.reset({
//					top: 0
//				})
//			})
		},
		methods: {
			onScrollBottom() {
				if(this.onFetching) {
					// do nothing
				} else {
					this.onFetching = true
					setTimeout(() => {
						this.bottomCount += 1
						this.$nextTick(() => {
							this.$refs.scrollerBottom.reset()
						})
						this.onFetching = false
					}, 2000)
				}
			},
			onScroll(pos) {
				this.scrollTop = pos.top
			},
			onCellClick() {
				window.alert('cell click')
			},
			onClickButton() {
				window.alert('click')
			},
			changeList() {
				this.showList1 = false
				this.$nextTick(() => {
					this.$refs.scroller.reset({
						top: 0
					})
				})
			}
		}
	}
</script>

<style scoped>
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