<template>
	<div class="" style="color: #fff;">
		<h1 style="margin: 15px;">{{title}}</h1>
		<p style="margin: 0 15px;">{{time}}</p>
		<div class="History_content" v-html="htmls">
			
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
	export default{
		computed: {
			...mapState({
				count: 'list_num'
			})
		},
		data(){
			return {
				time:'',
				title:'',
				htmls :[],
				nums : this.$store.state.list_num
			}
		},
		methods:{
			getDatas(){
				axios.get('https://www.easy-mock.com/mock/5b3c6de73e96141ffe9caf37/list/artcileList') 
					.then(res => {
						this.htmls =	eval(res.data.data)[this.nums].value
						
						this.title = eval(res.data.data)[this.nums].title
						this.time = eval(res.data.data)[this.nums].time
						
						//alert(typeof this.htmls)
						
					}) 
			}
			
		},
		created(){
			this.getDatas()
		}
	}
</script>

<style>
	.History_content{
		padding: 15px;
	}
  .History_content .imgs{
		width: 100%;
	}
	.History_content p{
		line-height: 30px;
    word-break: break-all;
    color: #ccc;
    font-size: 14px;
	}
</style>