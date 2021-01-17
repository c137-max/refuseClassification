<template>
	<view>
		<u-navbar :is-back="false" title=" " :border-bottom="false">
			<view class="u-flex u-row-right" style="width: 100%;">
			</view>
		</u-navbar>
		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30">
			<view class="u-m-r-10">
				<u-avatar :src="pic" size="140"></u-avatar>
			</view>
			<navigator :url="redirt" >
				<view class="u-flex-1">
					<view class="u-font-18 u-p-b-20">{{username}}</view>
					<view class="u-font-14 u-tips-color">ID:{{userID}}</view>
				</view>
			</navigator>
			
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				
				<navigator url="./concatME">
					<u-cell-item icon="chat-fill" title="联系客服"></u-cell-item>
				</navigator>
				<navigator url="./advice">
					<u-cell-item icon="coupon" title="提交建议"></u-cell-item>
				</navigator>
				<navigator url="./ad">
					<u-cell-item icon="heart" title="我想看广告"></u-cell-item>
				</navigator>
				
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20" v-if="login" @click="BLogout">
			<u-cell-group>
				<u-cell-item icon="backspace" title="退出登录"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	import {  
	        mapState,  
	        mapMutations  
	    } from 'vuex';  
	export default {
        computed: mapState(['hasLogin','uerInfo']), 
		data() {
			return {
				username: "点击登陆",
				pic: "",
				userID: "游客",
				show:true,
				login: false,
				redirt: "./login"
			}
		},
		onShow() {
			let that=this;
			console.log(this.hasLogin)
			if(this.hasLogin==true){
				uni.getStorage({
					key: "uerInfo",
					success:function(res){
						var data= res.data;
						console.log(data)
						that.username = data.user_name
						that.userID = data.userID
						that.pic = data.head_pic
					}
				})
				
				that.redirt = ""
				that.login = true
			}else{
				that.username = "点击登陆"
				that.userID = "游客"
				that.pic = ""
				that.login = false
				that.redirt = "./login"
			}
			// if(p == ""){
			// 	// that.pic = "/static/images/head.png"
			// }
		},
		methods: {
			...mapMutations(['logout']),  
			BLogout(){
				let that = this;
				console.log("over")
				this.logout()
				that.username = "点击登陆"
				that.userID = "游客"
				that.pic = ""
				that.login = false
				that.redirt = "./login"
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #ededed;
}

.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
</style>
