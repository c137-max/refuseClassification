<template>
	<view>
		<u-modal v-model="show" :content="content"></u-modal>

		<text>在下面写下您对本产品的意见或建议:</text>
		<u-gap height="50"></u-gap>
		<u-input v-model="value" :type="type" :placeholder="holder" :border="border" :height="height" :auto-height="autoHeight" />
		<u-gap height="500"></u-gap>
		<u-button shape="square" @click="submit">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				content: "",
				value: '',
				holder: "您的建议对我来说非常重要,您提出的意见我会细心阅读！谢谢",
				type: 'textarea',
				border: true,
				height: 100,
				autoHeight: true,
			}
		},
		methods: {
			submit() {
				let that = this;
				uni.getNetworkType({
					success(res) {
						console.log(res.networkType)
						if (that.value == "") {
							that.content = "不能为空"
							that.show = true
							return false;
						}
						if (res.networkType == "none") {
							that.content = "请先打开网络"
							that.show = true
						} else {
							that.content = "提交成功"
							that.show = true
						}
					}
				})
			}
		}
	}
</script>

<style>

</style>
