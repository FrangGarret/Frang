<template>
	<ul>
		<li tag="li" @click="fun1(index)" v-for="(item,index) in someThingsList" :key='item.index' class="Frang_view_cell">
			<img class="Frang_pull_left Frang_img_icon" :src="item.imgSrc">
			<div class="Frang_text">
				<p class="Frang_title_text">{{ item._text }}</p>
				<p class="Frang_time">{{item.time}}</p>
				<i class="iconfont icon-icon Frang_right_arr"></i>
			</div>
		</li>
	</ul>
</template>

<script>
	import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
	const lists = [{
			imgSrc: require('../../assets/img/little/1.jpg'),
			_text: '睹物思人',
			time:'2013-08-06'
		},
		{
			imgSrc: require('../../assets/img/little/2.jpg'),
			_text: '家书抵万金',
			time:'2013-08-06'
		}
	]
	export default {
		data() {
			return {
				someThingsList: lists
			}
		},
		computed: {
			...mapState({
				count: 'list_num'
			})
		},
		methods: {
			fun1(value) {
				console.log(value)
				
				//改变状态
				this.$store.commit('fun1Increment',{
					n:value
				})
				this.$router.push({
					name: 'someThings'
				})
				
			},
			

		}
	}
</script>

<style>

</style>