<template>
	<page-meta <navigation-bar :title="title" />
	</page-meta>

	<view>
		<view class="u-content">
			<web-view :webview-styles="webviewStyles" :src="url"></web-view>
		</view>
	</view>



</template>

<script>
	export default {
		data() {
			return {
				title: "",
				url: "",
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		},
		methods: {

		},
		onLoad() {
			let that = this;
			uni.getStorage({
				key: "article",
				success(res) {
					that.title = res.data.title;
					that.url = res.data.url;
					uni.removeStorage({
						key:"article"
					})
				}
			})
			
		}
	}
</script>

<style>
	.image {
		text-align: center;
		width: 100%;
		border: green solid 1px;
	}
</style>
