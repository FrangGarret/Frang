<template>
	<div class="img_warp" style="height: 600px;"> 
		<vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData"></vue-waterfall-easy>
	</div>
</template>

<script>
	import vueWaterfallEasy from '@/components/vue_waterfall_easy'
	import axios from 'axios'
	export default {
		components: {
			vueWaterfallEasy
		},
		data() {
			return {
				imgsArr: [],
				group: 0, // request param
			}
		},
		methods: {
			//如果图片是异步生成的，在图片数据更新后调用：
			//this.$previewRefresh()
			getData() {
				//axios.get('https://www.easy-mock.com/mock/5b3c6de73e96141ffe9caf37/list/photoList?group=' + this.group) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
				axios.get('./static/mock/data.json?group=' + this.group) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
					.then(res => {
						this.imgsArr = this.imgsArr.concat(res.data)
						this.group++
					})
			}
		},
		created() {
			this.getData()
		}

	}
</script>

<style scoped="scoped">
</style>