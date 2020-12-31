<template>
	<view class="list">
		<!-- 基于 uni-list 的页面布局 -->
		<uni-list class="uni-list--waterfall">
			<uni-list-item :border="true" class="uni-list-item--waterfall" title="环保商品" v-for="item in data" :key="item._id">
				<!-- 通过header插槽定义列表左侧图片 -->

				<template v-slot:header>
					<navigator :url="'/pages/shop/details?id='+item.goods_sn">
						<view class="uni-thumb shop-picture shop-picture-column">
							<image :src="item.goods_thumb" mode="aspectFill"></image>
						</view>
					</navigator>
				</template>

				<!-- 通过body插槽定义商品布局 -->
				<view slot="body" class="shop">
					<view>
						<view class="uni-title">
							<navigator :url="'/pages/shop/details?id='+item.goods_sn">
								<text class="uni-ellipsis-2">{{ item.name }}</text>
							</navigator>

						</view>
						<view>
							<text class="uni-tag hot-tag">{{ item.goods_tip }}</text>
							<text v-for="tag in item.tag" :key="tag" class="uni-tag">{{ tag }}</text>
						</view>
					</view>
					<view>
						<view class="shop-price">
							<text>¥</text>
							<text class="shop-price-text">{{ item.goods_price }}</text>
							<text>.00</text>
						</view>
						<view class="uni-note">{{ item.comment_count }}条评论 月销量 {{ item.month_sell_count }}</view>
						<view class="uni-note ellipsis">
							<text class="uni-ellipsis-1">{{ item.shop_name }}</text>
							<text class="uni-link" @click="add_to_cart(item.goods_sn)">加入购物车 ></text>
						</view>
					</view>
				</view>
			</uni-list-item>
		</uni-list>
		<!-- <u-subsection :list="list" :current="1"></u-subsection> -->
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				data: {
					data: [],
					list: [{
						name: '待收货'
					}, {
						name: '待付款'
					}, {
						name: '待评价',
						count: 5
					}],
					current: 0,
				}
			};
		},
		onShow() {
			let that = this;
			that.data = [{
					"category_id": "", // 分类id
					"goods_sn": "123", // 商品的唯一货号
					"name": "环保手提袋", // 商品名称
					"keywords": "手机,iPhone", // 商品关键字，为搜索引擎收录使用
					"goods_desc": "", // 商品详细描述
					"goods_thumb": "https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg", // 商品缩略图，用于在列表或搜索结果中预览显示
					"goods_banner_imgs": "", // 商品详情页的banner图地址
					"goods_price": "9999", // 商品价格
					"remain_count": "999999", // 库存数量
					"month_sell_count": "640", // 月销量
					"total_sell_count": "28512", // 总销量
					"comment_count": "980021", // 累计评论数
					"is_real": true, // 是否实物
					"is_on_sale": true, // 是否上架销售
					"is_alone_sale": true, // 是否能单独销售；如果不能单独销售，则只能作为某商品的配件或者赠品销售
					"is_best": true, // 是否精品
					"is_new": true, // 是否新品
					"is_hot": true, // 是否热销
					"add_date": "2020-8-26 09:37:21", // 上架时间
					"last_modify_date": "2020-8-26 09:37:21", // 最后修改时间
					"seller_note": "", //商家备注，仅商家可见
					"shop_name": "环保商城",
					"tag": ["手机", "iPhone"],
					"goods_tip": "火爆"
				}, {
					"category_id": "",
					"goods_sn": "4",
					"name": "Apple iPad 平板电脑 2018年新款9.7英寸",
					"keywords": "手机,iPhone",
					"goods_desc": "",
					"goods_thumb": "https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg",
					"goods_banner_imgs": "",
					"goods_price": "3499",
					"remain_count": "999999",
					"month_sell_count": "640",
					"total_sell_count": "28512",
					"comment_count": "12",
					"is_real": true,
					"is_on_sale": true,
					"is_alone_sale": true,
					"is_best": false,
					"is_new": true,
					"is_hot": false,
					"add_date": "2020-8-26 09:37:21",
					"last_modify_date": "2020-8-26 09:37:21",
					"seller_note": "",
					"shop_name": "手机专卖店",
					"tag": ["手机", "iPhone"],
					"goods_tip": "优惠"
				},
				{
					"category_id": "",
					"goods_sn": "5",
					"name": "Apple iPad 平板电脑 2018年新款9.7英寸",
					"keywords": "手机,iPhone",
					"goods_desc": "",
					"goods_thumb": "https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg",
					"goods_banner_imgs": "",
					"goods_price": "3499",
					"remain_count": "999999",
					"month_sell_count": "640",
					"total_sell_count": "28512",
					"comment_count": "12",
					"is_real": true,
					"is_on_sale": true,
					"is_alone_sale": true,
					"is_best": false,
					"is_new": true,
					"is_hot": false,
					"add_date": "2020-8-26 09:37:21",
					"last_modify_date": "2020-8-26 09:37:21",
					"seller_note": "",
					"shop_name": "手机专卖店",
					"tag": ["手机", "iPhone"],
					"goods_tip": "优惠"
				}, {
					"category_id": "",
					"goods_sn": "6",
					"name": "Apple iPad 平板电脑 2018年新款9.7英寸",
					"keywords": "手机,iPhone",
					"goods_desc": "",
					"goods_thumb": "https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg",
					"goods_banner_imgs": "",
					"goods_price": "3499",
					"remain_count": "999999",
					"month_sell_count": "640",
					"total_sell_count": "28512",
					"comment_count": "12",
					"is_real": true,
					"is_on_sale": true,
					"is_alone_sale": true,
					"is_best": false,
					"is_new": true,
					"is_hot": false,
					"add_date": "2020-8-26 09:37:21",
					"last_modify_date": "2020-8-26 09:37:21",
					"seller_note": "",
					"shop_name": "手机专卖店",
					"tag": ["手机", "iPhone"],
					"goods_tip": "优惠"
				},
			]
		},

		onLoad() {},
		methods: {
			change(index) {
				this.current = index;
			},
			add_to_cart(id) {
				console.log(id)
			}
		}
	};
</script>

<style lang="scss">
	@import '@/common/uni-ui.scss';

	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	.tips {
		color: #67c23a;
		font-size: 14px;
		line-height: 40px;
		text-align: center;
		background-color: #f0f9eb;
		height: 0;
		opacity: 0;
		transform: translateY(-100%);
		transition: all 0.3s;
	}

	.tips-ani {
		transform: translateY(0);
		height: 40px;
		opacity: 1;
	}

	.shop {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.shop-picture {
		width: 110px;
		height: 110px;
	}

	.shop-picture-column {
		width: 100%;
		height: 170px;
		margin-bottom: 10px;
	}

	.shop-price {
		margin-top: 5px;
		font-size: 12px;
		color: #ff5a5f;
	}

	.shop-price-text {
		font-size: 16px;
	}

	.hot-tag {
		background: #ff5a5f;
		border: none;
		color: #fff;
	}

	.button-box {
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		background: #007AFF;
		color: #fff;
	}

	.uni-link {
		flex-shrink: 0;
	}

	.ellipsis {
		display: flex;
		overflow: hidden;
	}

	.uni-ellipsis-1 {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.uni-ellipsis-2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}


	// 默认加入 scoped ，所以外面加一层提升权重
	.list {
		.uni-list--waterfall {

			/* #ifndef H5 || APP-VUE */
			// 小程序 编译后会多一层标签，而其他平台没有，所以需要特殊处理一下
			/deep/ .uni-list {
				/* #endif */
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				padding: 5px;
				box-sizing: border-box;

				/* #ifdef H5 || APP-VUE */
				// h5 和 app-vue 使用深度选择器，因为默认使用了 scoped ，所以样式会无法穿透
				/deep/
				/* #endif */
				.uni-list-item--waterfall {
					width: 50%;
					box-sizing: border-box;

					.uni-list-item__container {
						padding: 5px;
						flex-direction: column;
					}
				}

				/* #ifndef H5 || APP-VUE */
			}

			/* #endif */
		}
	}
</style>
