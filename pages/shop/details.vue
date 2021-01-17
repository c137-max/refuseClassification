<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		},
		onLoad(op) {
			this.src = op.url
		},
		methods: {

		}
	}
</script>

<style>

</style>
