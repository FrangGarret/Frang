<template>
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		props: {
			probeType: { // 监听滚动事件
				type: Number,
				default: 1
			},
			click: { // 点击事件
				type: Boolean,
				default: true
			},
			data: {
				type: Array,
				default: null
			},
			listenScroll: {
				type: Boolean,
				default: true
			}
		},
		mounted() {
			setTimeout(() => {
				console.log('22')
				this._initScroll()
				this.refresh()
			}, 20)
		},
		created(){
			this._initScroll()
			this.refresh()
		},
		methods: {
			_initScroll() {
				console.log(this.$refs.wrapper)
				if(!this.$refs.wrapper) {
					console.log('11')
					return
				}
				console.log(this.listenScroll)
				this.scroll = new BScroll(this.$refs.wrapper, {
					probeType: this.probeType,
					click: this.click
				})
				if(this.listenScroll) {
					let me = this
					this.scroll.on('scroll', (pos) => {
						me.$emit('scroll', pos)
					})
				}
			},
			enable() { // 启用scroll，默认开启
				this.scroll && this.scroll.enable()
			},
			disable() { // 禁用scroll
				this.scroll && this.scroll.disable()
			},
			refresh() { // 重新计算scroll
				this.scroll && this.scroll.refresh()
			},
			scrollTo() {
				this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
			},
			scrollToElement() {
				this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
			}
		},
		watch: {
			data() {
				setTimeout(() => {

				}, 20)
			}
		}
	}
</script>

<style scoped>

</style>