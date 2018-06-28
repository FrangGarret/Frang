<template>

	<ul class="tabbar">
		<router-link to="/Index_warp"  class="el-menu-item"  tag="li">
			<i class="iconfont icon-home"></i>
			<p class="text">Home</p>
		</router-link>
		<router-link to='/Options_warp' class="el-menu-item" tag="li">
			<i class="iconfont icon-xuanxiang"></i>
			<p class="text">Options</p>
		</router-link>
		<!--<router-link to="/Record" class="el-menu-item" tag="li">
				<i class="iconfont icon-shijian"></i>
				<p class="text">我的记录</p>
			</router-link>-->
		<router-link to="/Personal" class="el-menu-item" tag="li">
			<i class="iconfont icon-lianxiren"></i>
			<p class="text">Personal</p>
		</router-link>
	</ul>

</template>

<script>
</script>

<style>
	@import '../assets/iconfonts/iconfont.css';
	@import '../assets/css/reset.css';
	.bodys {
	}
</style>