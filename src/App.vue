<template>
	<div class="background_f1f1f1"">

		<transition :name="transitionName" mode="out-in">
			<router-view class="Router"></router-view>
		</transition>

		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from '@/components/footer.vue'
	export default {
		name: 'App',
		components: {
			Footer: Footer
		},
		methods: {

		},
		mounted() {

		},
		data() {　　　　
			return {　　　　　　
				transitionName: 'slide-right' // 默认动态路由变化为slide-right
				　　　　
			}　　
		},
		watch: {　　　
			'$route' (to, from) {
				　　　　
				  const toDepth = to.path.split('/').length
          const fromDepth = from.path.split('/').length
					console.log(to)
				
				let isBack = this.$router.isBack // 监听路由变化时的状态为前进还是后退;
				
				if(isBack) {　　　　　　　　
					this.transitionName = 'slide-right'
					this.$router.isBack = false　　　　　　
				} else {　　　　　　
					this.transitionName = 'slide-left'
					this.$router.isBack = true　　　　　
				}　　
			}　
		}
	}
</script>
<style>
	.Router {
		position: absolute;
		width: 100%;
		transition: all .8s ease;
		top: 0;
		padding-bottom: 71px;
		box-sizing: border-box;
		min-height: 100%;
	}
	
	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		-webkit-transform: translate(100%, 0);
		transform: translate(100%, 0);
	}
	
	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
		-webkit-transform: translate(-100%, 0);
		transform: translate(-100% 0);
	}
</style>