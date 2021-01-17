<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎注册</view>
			<input class="u-border-bottom" type="text" v-model="tel" placeholder="请输入用户名" />
			<u-gap height="80"></u-gap>
			<input class="u-border-bottom" type="text" v-model="tel" placeholder="请输入邮箱号" />
			<u-gap height="80"></u-gap>
			<input class="u-border-bottom" type="password" v-model="tel" placeholder="请输入密码" />
			<u-gap height="80" ></u-gap>
			<u-button :ripple="true">点击注册</u-button>
		</view>
		<u-gap height="80" ></u-gap>
		<u-gap height="80"></u-gap>
		<view class="buttom">
			<view class="hint">
				注册代表同意
				<text class="link">用户协议、隐私政策，</text>
				并授权使用您的部分个人信息（如昵称、头像），以便您统一管理
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
