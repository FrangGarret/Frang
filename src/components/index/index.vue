<template>
	<div id="" style="overflow: hidden;">
		<swiper loop auto :list="demo07_list" :aspect-ratio="250/400" :index="demo07_index" @on-index-change="demo07_onIndexChange"></swiper>
		<div class="">Wonderful case</div>
		<ul class="">
			<router-link tag="li" v-for="(item,index) in taps" :key='item.index' :to="{name:item.ruoters}" class="Frang_view_cell" >
				<img class="Frang_pull_left Frang_img_icon" :src="item.imgSrc">
				<div class="Frang_text">
					<p class="Frang_title_text">{{ item._text }}</p>
					<p class="Frang_ellipsis">{{ item._title }}</p>
					<i class="iconfont icon-icon Frang_right_arr"></i>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
	//轮播图数据
	const baseList = [{
		url: 'javascript:',
		img: require('../../assets/img/banner1.jpg'), //加载本地图片使用方法
		title: 'The sun has risen, the dream began to set out!'
	}, {
		url: 'javascript:',
		img: require('../../assets/img/banner2.jpg'),
		title: 'Just like you and you go to the old'
	}, {
		url: 'javascript:',
		img: require('../../assets/img/banner3.jpg'), // 404
		title: 'I‘m still here, but where are you?',
		fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
	}, {
		url: 'javascript:',
		img: require('../../assets/img/banner4.jpg'), // 404
		title: 'Boundless sea more fascinating',
		fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
	}]
	const only2ClickList = baseList.slice(0, 4).map(item => {
		item.url = 'http://fangjialiang.com'
		return item
	})
	const tapsList = [{
			imgSrc: require('../../assets/img/cbd.jpg'),
			_text: 'Atlas (军旅时光)',
			_title: 'The cheers and laughter！',
			ruoters:'photoList'
		},
		{
			imgSrc: require('../../assets/img/yuantiao.jpg'),
			_text: 'Life ah (生活感言)',
			_title: 'Quietly look at this world, and finally crazy！',
			ruoters:'somethingsList'
		},
		{
			imgSrc: require('../../assets/img/shuijiao.jpg'),
			_text: 'Resume (个人简历)',
			_title: 'Where was the comrade in arms?',
			ruoters:'Personal'
		},
		{
			imgSrc: require('../../assets/img/timg.jpg'),
			_text: 'Traveling (旅游风光)',
			_title: 'The world is so big that we must look at it！',
			ruoters:'travel'
		}
	]

	export default {
		components: {
			Swiper,
			SwiperItem,
			GroupTitle,
			XButton,
			Divider
		},
		data() {
			return {
				percent: 30,
				taps: tapsList,
				demo07_list: baseList,
				demo07_index: 0
			}
		},
		created() {

		},
		beforeCreate() { //组件生命周期函数
			console.log('beforeCreate')
		},
		beforeRouteEnter(to, from, next) {
			console.log('beforRouteEnter')
			console.log(this) // 结果为undefined，因为在执行beforRouteEnter时候，组件还没有被创建出来；先执行beforRouteEnter，再执行beforeCreate
			next((vm) => { //参数vm就是当前组件的实例。
				vm.percent = 100
			})
		},
		beforeRouteUpdate(to, from, next) {
			console.log('beforeRouteUpdate')
			next()
		},
		methods: {
			demo07_onIndexChange(index) {
				this.demo07_index = index
			}
		},
		mounted() {

		}
	}
</script>

<style>
</style>