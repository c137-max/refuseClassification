<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	
	@import "uview-ui/index.scss";
	@import "./static/iconfont.css";
</style>

<script>
	import {  
	        mapMutations  
	    } from 'vuex';  
	export default {
		onLaunch: function() {
			 uni.getStorage({//获得保存在本地的用户信息  
				key: 'uerInfo',  
				success:(res) => {  
					this.login(res.data);  
					// uni.request({// 再次校验并刷新token的有效时间  
					// 	url: `${this.$serverUrl}/auth.php`,  
					// 	header: {  
					// 		"Content-Type": "application/x-www-form-urlencoded",  
					// 		"Token":res.data.token  
					// 	},  
					// 	data: {  
					// 		"username":res.data.user_name  
					// 	},  
					// 	method: "POST",  
					// 	success: (e) => {  
					// 		if (e.statusCode === 200 && e.data.code === 0) {  
					// 			this.login(e.data);  
					// 		}  
					// 	}  
					// })  
				}  
			}); 
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			...mapMutations(['login'])  
		}
	}
</script>

<!-- <style>
	/*每个页面公共css */
</style> -->
