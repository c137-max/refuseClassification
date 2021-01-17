<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">忘记密码</view>
			<input class="u-border-bottom" type="text" v-model="tel" placeholder="请输入邮箱号或者用户名" />
			<u-gap height="80"></u-gap>
			<u-button :ripple="true">发送邮件</u-button>
		</view>
		<u-gap height="80" ></u-gap>
		<u-gap height="80"></u-gap>
		<u-gap height="80" ></u-gap>
		<u-gap height="80" ></u-gap>
		<u-gap height="80" ></u-gap>
		<view class="buttom">
			<view class="hint">
				请根据邮件所提示的步骤完成重置密码，如果找不到相关邮件，
				请检查您的邮箱垃圾箱或者<text class="link">联系客服</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tel: ''
		}
	},
	computed: {
		inputStyle() {
			let style = {};
			if(this.tel) {
				style.color = "#fff";
				style.backgroundColor = this.$u.color['warning'];
			}
			return style;
		}
	},
	methods: {
		submit() {
			if(this.$u.test.mobile(this.tel)) {
				this.$u.route({
					url: 'pages/template/login/code'
				})
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.wrap {
	font-size: 28rpx;
	.content {
		width: 600rpx;
		margin: 80rpx auto 0;

		.title {
			text-align: left;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 100rpx;
		}
		input {
			text-align: left;
			margin-bottom: 10rpx;
			padding-bottom: 6rpx;
		}
		.tips {
			color: $u-type-info;
			margin-bottom: 60rpx;
			margin-top: 8rpx;
		}
		.getCaptcha {
			background-color: rgb(253, 243, 208);
			color: $u-tips-color;
			border: none;
			font-size: 30rpx;
			padding: 12rpx 0;
			
			&::after {
				border: none;
			}
		}
		.alternative {
			color: $u-tips-color;
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
		}
	}
	.buttom {
		.loginType {
			display: flex;
			padding: 350rpx 150rpx 150rpx 150rpx;
			justify-content:space-between;
			
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: $u-content-color;
				font-size: 28rpx;
			}
		}
		
		.hint {
			padding: 20rpx 40rpx;
			font-size: 20rpx;
			color: $u-tips-color;
			
			.link {
				color: $u-type-warning;
			}
		}
	}
}
</style>
