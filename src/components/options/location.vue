<template>

	<baidu-map class="map" :center="{lng: 121.45109, lat: 31.186184}" :zoom="15" ak="8kUxvYNxPaoyKXt33OUORXVh">
		<bm-marker :position="{lng: 121.45109, lat: 31.186184}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
			<bm-label content="徐家汇" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}" />
		</bm-marker>
		<bm-copyright anchor="BMAP_ANCHOR_TOP_RIGHT" :copyright="[{id: 1, content: 'Copyright Message', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a>Frang个人版权信息</a>'}]">
		</bm-copyright>
		<bm-panorama></bm-panorama>
	</baidu-map>

</template>

<script>
	import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
	import { BmMarker, BmLabel,BmCopyright,BmPanorama } from 'vue-baidu-map'
	export default {
		components: {
			BaiduMap,
			BmMarker,
			BmLabel,
			BmCopyright,
			BmPanorama
		}
	}
</script>

<style>
	.map {
		height: 400px;
	}
</style>