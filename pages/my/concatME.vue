<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="https://c137max.xyz/%e8%81%94%e7%b3%bb/"></web-view>
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
		methods: {
			
		}
	}
</script>

<style>

</style>
