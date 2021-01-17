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
			<u-card title="垃圾分类热点">
				<view class="" slot="body">
					<view class="u-border-bottom " v-for="(item, index) in articles" :key="item.title">
						<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
							<view @click="see_article(item.url)" :id="item.url" class="u-body-item-title u-line-2">{{index+1}}. {{item.title}}</view>
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
					title: "中国进入垃圾分类“强制时代”_滚动新闻_中国政府网",
					url: "http://www.gov.cn/xinwen/2019-06/24/content_5402650.htm"
				},
				{
					title: "垃圾分类：“新时尚”的美丽折射_滚动新闻_中国政府网",
					url: "http://www.gov.cn/xinwen/2019-08/20/content_5422720.htm"
				},{
					title: "全国各地因地制宜有序推进生活垃圾分类_滚动新闻_中国政府网",
					url: "http://www.gov.cn/xinwen/2020-12/15/content_5569466.htm"
				},
				{
					title: "垃圾分类：从步履维艰到层层推进 _ 滚动新闻 _中国政府网",
					url: "http://www.gov.cn/xinwen/2018-03/16/content_5274585.htm"
				},
				{
					title: "深圳垃圾分类正式进入“强制分类”时代_滚动新闻_中国政府网",
					url: "http://www.gov.cn/xinwen/2020-09/01/content_5539091.htm"
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
			see_article(url, title) {
				console.log({url, title})
				uni.setStorage({
					key: "article",
					data: {url, title},
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
