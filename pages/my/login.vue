<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎登录</view>
			<u-gap height="80"></u-gap>
			<u-gap height="80"></u-gap>
			<u-gap height="80"></u-gap>
			<u-button :ripple="true" @click="Blogin">QQ登录</u-button>
		</view>
		<u-gap height="80"></u-gap>
		<u-gap height="80"></u-gap>
		<u-gap height="80"></u-gap>
		<u-gap height="80" ></u-gap>
		<u-gap height="80"></u-gap>
		<view class="buttom">
			<view class="hint">
				登录代表同意
				<text class="link">用户协议、隐私政策，</text>
				并授权使用您的部分个人信息（如昵称、头像），以便您统一管理
			</view>
		</view>
	</view>
</template>

<script>
import {  
	mapMutations    
} from 'vuex'; 
export default {
	data() {
		return {
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
		Blogin() {
			let that = this;
			uni.login({
			  provider: 'qq',
			  success: function (loginRes) {
				uni.getUserInfo({
					provider: "qq",
					success:function(res){
						console.log(res)
						var data = res.userInfo
						var provider = {
							token: data.nickName,
							user_name: data.nickName,
							head_pic: data.avatarUrl,
							userID: "test",
						}
						that.login(provider)
						uni.switchTab({
							url: "my"
						})
					},
				})
			  },
			  fail() {
			  	uni.showToast({
			  		title: "登陆失败",
					icon:"none"
			  	})
			  }
			});
		},
		...mapMutations(['login'])
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
