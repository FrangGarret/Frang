<template>
	<div class="">
		<div id="myChart1" :style="{width: '100%', height: '300px'}"></div>
		<div id="myChart2" :style="{width: '100%', height: '400px'}"></div>
		<div id="myChart3" :style="{width: '100%', height: '300px'}"></div>

	</div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			drawLine() {

				let option = {
					title: {
						text: '饼状图',
						backgroundColor: 'transparent',
						textStyle: {
							fontWeight: 'normal', //标题颜色
							color: '#fff'
						}
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {d}%"
					},
					legend: {
						orient: 'vertical',
						left: 'left',
						top: 'center',
						data: ['HTML5', 'javascript', 'Vue.js', 'CSS3', 'webpack']
					},
					series: [{
						name: '技能构成',
						type: 'pie',
						radius: '55%',
						center: ['50%', '50%'],
						data: [{
								value: 1959,
								name: 'HTML5',
								itemStyle: {
									normal: {
										color: '#EA9294'
									}
								}
							},
							{
								value: 1239,
								name: 'javascript',
								itemStyle: {
									normal: {
										color: '#949494'
									}
								}
							},
							{
								value: 2844,
								name: 'Vue.js',
								itemStyle: {
									normal: {
										color: '#A4D2D5'
									}
								}
							},
							{
								value: 1802,
								name: 'CSS3',
								itemStyle: {
									normal: {
										color: '#F1C0B1'
									}
								}
							},
							{
								value: 1576,
								name: 'webpack',
								itemStyle: {
									normal: {
										color: '#BAD7CB'
									}
								}
							}
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				};

				// 基于准备好的dom，初始化echarts实例
				let myChart1 = echarts.init(document.getElementById('myChart1'))
				let myChart2 = echarts.init(document.getElementById('myChart2'))
				let myChart3 = echarts.init(document.getElementById('myChart3'))
				// 绘制图表
				myChart1.setOption({
					title: {
						text: '柱状图',
						backgroundColor: 'transparent',
						textStyle: {
							fontWeight: 'normal', //标题颜色
							color: '#fff'
						}
					},
					tooltip: {
						backgroundColor: 'rgba(255,255,255,0.8)', //通过设置rgba调节背景颜色与透明度
						color: 'black',
						borderWidth: '1',
						borderColor: 'gray',
						textStyle: {
							color: 'black',
						}
					},
					xAxis: {
						data: ["H5", "js", "Vue", "css3", "webp"],
						axisLine: {
							lineStyle: {
								color: '#fff',
								backgroundColor: '#fff'
							}
						}
					},
					yAxis: {
						axisLine: {
							lineStyle: {
								color: '#fff',
								backgroundColor: '#fff'
							}
						}
					},
					series: [{
						name: '销量',
						type: 'bar',
						data: [90, 80, 82, 90, 80],
					}]
				});
				myChart2.setOption({
					title: {
						text: '仪表盘',
						backgroundColor: 'transparent',
						textStyle: {
							fontWeight: 'normal', //标题颜色
							color: '#fff'
						}
					},
					tooltip: {
						formatter: "{a} <br/>{b} : {c}%"
					},
					grid: {
						width: 200,
						height: 95
					},
					series: [{
						name: '外围刻度',
						type: 'gauge',
						radius: '75%',
						center: ['50%', '50%'],
						startAngle: 180,
						endAngle: 0,
						axisLine: {
							lineStyle: {
								width: 4,
								color: [
									[1, 'cyan']
								]
							},
						},
						splitLine: {
							length: -6,
							lineStyle: {
								color: 'red',
								width: 4
							}
						},
						axisLabel: {
							show: false
						},
						axisTick: {
							splitNumber: 1,
							lineStyle: {
								opacity: 0,
							}
						},
						detail: {
							show: false
						},
						pointer: {
							show: false
						}

					}, {
						name: '内层数据刻度',
						type: 'gauge',
						radius: '70%',
						center: ['50%', '50%'],
						startAngle: 180,
						endAngle: 0,
						axisLine: {
							lineStyle: {
								opacity: 0
							},
						},
						splitLine: {
							length: 20,
						},
						axisLabel: {
							distance: -80,
							color: '#fff',
							fontSize: 24,
							formatter: function(param) {
								if((param % 50) == 0) {
									return param
								}
							}
						},
						detail: {
							show: false,
							formatter: '{value}%',
							// backgroundColor:'#fff'
						},
						itemStyle: {
							normal: {
								color: 'cyan'
							}
						},
						pointer: {
							width: 10,
							length: '90%'
						},
						data: [{
							value: '60',
							name: 'xxx'
						}]
					}, {
						name: '最内层线',
						type: 'gauge',
						radius: '35%',
						center: ['50%', '50%'],
						startAngle: 180,
						endAngle: 0,
						axisLine: {
							lineStyle: {
								width: 4,
								color: [
									[1, 'cyan']
								]
							},
						},
						splitLine: {
							length: -6,
							lineStyle: {
								opacity: 0
							}
						},
						axisLabel: {
							show: false
						},
						axisTick: {
							splitNumber: 1,
							lineStyle: {
								opacity: 0,
							}
						},
						detail: {
							show: false
						},
						pointer: {
							show: false
						}

					}, {
						name: '饼图',
						tooltip: {
							show: false
						},
						type: 'pie',
						radius: ['0%', '34%'],
						hoverAnimation: false,
						itemStyle: {
							normal: {
								color: '#333'
							},
							emphasis: {
								color: '#333'
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						animation: false,
						data: [1]
					}]
				})
				//地图组件
				myChart3.setOption(option)

			}
		}
	}
</script>

<style>

</style>