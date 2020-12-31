<template>
	<view class="body">
		<search></search>
		<view>
			<u-card title="热门查询">
				<view class="" slot="body">
					<view class="u-border-bottom ">
						<u-grid :col="3">
							<u-grid-item @click="hot_query('蔬菜')">
								<u-icon name="shucai" custom-prefix="custom-icon" size="43"></u-icon>
								<view class="grid-text">蔬菜</view>
							</u-grid-item>
							<u-grid-item @click="hot_query('垃圾袋')">
								<u-icon name="lajidai" custom-prefix="custom-icon" size="43"></u-icon>
								<view class="grid-text">垃圾袋</view>
							</u-grid-item>
							<u-grid-item @click="hot_query('苹果')">
								<u-icon name="pingguo" custom-prefix="custom-icon" size="43"></u-icon>
								<view class="grid-text">苹果</view>
							</u-grid-item>
						</u-grid>
					</view>
				</view>
			</u-card>
		</view>
		<view>
			<u-card title="垃圾分类小知识">
				<view class="" slot="body">
					<view class="u-border-bottom " v-for="(item, index) in articles" :key="item.title">
						<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
							<view @click="see_article(item.id)" :id="item.id" class="u-body-item-title u-line-2">{{index+1}}. {{item.title}}</view>
							<u-icon name="shucai" custom-prefix="custom-icon" size="43"></u-icon>
						</view>
					</view>
				</view>
			</u-card>
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
				articles: [],
			}
		},
		onShow() {
			this.articles = [{
					title: "为什么要进行垃圾分类",
					id: 1
				},
				{
					title: "垃圾分类的好处",
					id: 2
				},
				{
					title: "“垃圾分类,我先行”倡议书【精选】",
					id: 3
				},
			]
		},

		onLoad() {

		},
		methods: {
			
			hot_query(value){
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
			},
			see_article(id) {
				console.log(id)
				uni.setStorage({
					key: "article",
					data: id,
					success() {
						uni.navigateTo({
							url: "../article/article"
						})
					}
				})
			}
		}

	}
</script>

<style scoped lang="scss">
	@import url("../../common/uni.css");

	@font-face {
		font-family: 'iconfont';
		src: url('https://at.alicdn.com/t/font_865816_17gjspmmrkti.ttf') format('truetype');
	}



	.pic {
		width: 30%;
		height: 90px;
		background-color: #eeeeee;
		margin-left: 10px;
	}

	.pic_in {
		width: 90%;
		text-align: center;
		display: absolute;
	}

	/* div{position:relative;} */
	.pic1:after {
		content: '';
		position: relative;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-image: url(../../static/images/selected/kehuishou.png);
		background-position: center;
		background-size: 90px 100%;
		opacity: 0;
		transition: .5s;
	}

	.pic2:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-image: url(../../static/images/selected/bukehuishou.png);
		background-position: center;
		background-size: 90px 100%;
		opacity: 0;
		transition: .5s;
	}

	.pic:hover:after {
		opacity: 1;
	}

	.body {
		font-family: iconfont;
	}

	.title {
		margin-top: 20px;
		margin-left: 10px;
		color: transparent;
		-webkit-text-stroke: 1px black;
		letter-spacing: 0.04em;
	}

	.a_title {
		/* background: #55ff7f; */
		margin-top: 20px;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 30%;
		color: #00aaff;
		/* line-height: 1em; */
		/* color: #4e4e4e; */
		/* height: 30px; */
		min-width: 920px;
		border-top: 10px
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}
</style>
