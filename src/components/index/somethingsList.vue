<template>
	<ul>
		<li tag="li" @click="fun1(index)" v-for="(item,index) in someThingsList" :key='item.index'  class="Frang_view_cell" >
				<img class="Frang_pull_left Frang_img_icon" :src="item.imgSrc">
				<div class="Frang_text">
					<p class="Frang_title_text">{{ item._text }}</p>
					<i class="iconfont icon-icon Frang_right_arr"></i>
				</div>
			</li>
	</ul>
</template>

<script>
	const lists = [{
			imgSrc: require('../../assets/img/cbd.jpg'),
			_text: 'Atlas (军旅时光)',
			htmls: '',
			ruoters:''
		},
		{
			imgSrc: require('../../assets/img/yuantiao.jpg'),
			_text: 'Life ah (生活感言)',
			_title: 'Quietly look at this world, and finally crazy！',
			ruoters:''
		}
	]
	export default{
		data(){
			return {
				someThingsList:lists
			}
		},
		methods:{
			fun1(value){
				console.log(value)
				this.$router.push({
					name: 'someThings'
				})
			}
		}
	}
</script>

<style>
</style>