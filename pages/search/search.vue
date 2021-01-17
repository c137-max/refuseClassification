<template>
	<view>
		<page-meta <navigation-bar :title="title" />
		</page-meta>
		
		<u-modal v-model="show" >
			<u-card :title="tip">
				<view slot="body">
					<view >
						<view class="u-body-item   u-col-between ">
							<view >{{content}}</view>
						</view>
					</view>
				</view>
			</u-card>
		</u-modal>
		<search></search>
		<view v-if="Object.keys(reslut).length == 0">
			<u-empty  mode="search"></u-empty>
		</view>
		<view  class="myBt2" v-for="(item, index) in reslut">
			<button v-if="item.type==1" class="myBt button button-glow button-border button-rounded button-primary" type="default" @click="goto(index, item.type)">{{item.name}} [可]</button>
			<button v-if="item.type==2" class="myBt button button-glow button-border button-rounded button-primary" type="default" @click="goto(index, item.type)">{{item.name}} [害]</button>
			<button v-if="item.type==3" class="myBt button button-glow button-border button-rounded button-primary" type="default" @click="goto(index, item.type)">{{item.name}} [湿]</button>
			<button v-if="item.type==4" class="myBt button button-glow button-border button-rounded button-primary" type="default" @click="goto(index, item.type)">{{item.name}} [干]</button>
		</view>
	</view>
</template>

<script>
	import search from "../../components/search_plagin.vue"
	export default {
		components: {
			search
		},
		data() {

			return {
				title: "搜索中",
				reslut: [],
				r: "",
				data: [],
				show: false,
				tip: "",
				content: "",
			}
		},
		onShow() {
			let that = this;
			uni.getStorage({
				key: "search_value",
				success(res) {
					that.r = res.data
					that.title += "[" + that.r + "]"
					uni.request({
						url: "https://v1.alapi.cn/api/lajifenlei",
						method: "POST",
						data: {
							name: that.r,
							page: 1,
							num: 5,
						},
						success(res) {
							if (res.data.code == 200) {
								
								// console.log(JSON.stringify(res.data.data))
								var temp = [];
								for (let s of res.data.data) {
									temp.push({
										name: s.name,
										type: s.type
									})
								}
								that.reslut = temp;
								that.data = res.data.data;
								that.title = that.r;
							}
						}
					})
				}
			})
		},
		methods: {
			goto(index, type) {
				if(type==1){
					this.tip = "可回收垃圾"
				}else if(type==2){
					this.tip = "有害垃圾"
				}else if(type==3){
					this.tip = "湿垃圾"
				}else if(type==4){
					this.tip = "干垃圾"
				}
				this.content = this.data[index].tip;
				this.show=true;
				
			}
		}
	}
</script>

<style>
	@import url("../../static/css/buttons.css");

	.myBt {
		width: 80%;
		margin-top: 20px;

	}

	.myBt2 {
		text-align: center;
	}

</style>
