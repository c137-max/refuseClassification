<template>
	<view>
		
		<view class="box01 find">
			<input type="text" id="tip02"  @confirm="search" :value="search_value" placeholder="给垃圾找个家">
		</view>
	</view>
</template>

<script>
	
	export default {
		name: "search",
		data() {
			return {
				search_value:"",
			}
		},
		methods:{
			search(event){
					let value = event.detail.value;
					if(value === ""){
						uni.showModal({
							title:"对不起，不能为空",
							showCancel:false
						})
					}
					else{
						uni.setStorage({
							key:"search_value",
							data:value,
							success: () => {
								uni.navigateTo({
									url:"../search/search",
									// animationType: "slide-in-left"
								})
							}
						})
					}
					
				},
			}
		
	}
</script>

<style>
	@import url("/static/css/icon.css");
	.find {
		margin-top: 20px;
		margin-left: 20px;
	}
</style>
