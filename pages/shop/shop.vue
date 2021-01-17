<template>
	<view>
		<view class="list">
			<!-- 基于 uni-list 的页面布局 -->
			<uni-list class="uni-list--waterfall">
				<uni-list-item :border="true" class="uni-list-item--waterfall" title="环保商品" v-for="item in data">
					<!-- 通过header插槽定义列表左侧图片 -->
					<template v-slot:header>
						<navigator :url="'/pages/shop/details?url='+item.url">
							<view class="uni-thumb shop-picture shop-picture-column">
								<image :src="item.goods_thumb" mode="aspectFill"></image>
							</view>
						</navigator>
					</template>

					<!-- 通过body插槽定义商品布局 -->
					<view slot="body" class="shop">
						<view>
							<view class="uni-title">
								<navigator :url="'/pages/shop/details?url='+item.url">
									<text class="uni-ellipsis-2">{{ item.name }}</text>
								</navigator>

							</view>
						</view>
						<view>
							<view class="shop-price">
								<text>¥</text>
								<text class="shop-price-text">{{ item.goods_price }}</text>
								<text>.00</text>
							</view>
							<view class="uni-note ellipsis">
								<text class="uni-ellipsis-1">{{ item.shop_name }}</text>
							</view>
						</view>
					</view>
				</uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				data: {
					data: [],					
				}
			};
		},
		onShow() {
			let that = this;
			that.data = [{
					"category_id": "", // 分类id
					"url": "https://m.tb.cn/h.4SPkpOF?sm=516175",
					"name": "淘宝心选帆布袋", // 商品名称
					"goods_thumb": "https://img.alicdn.com/imgextra/i4/2201498506788/O1CN01av7WEI200x2oKBoB5_!!0-item_pic.jpg_430x430q90.jpg", // 商品缩略图，用于在列表或搜索结果中预览显示
					"shop_name": "虾选旗舰店",
					"goods_price": "19.9", // 商品价格
				}, {
					"category_id": "", // 分类id
					"url": "https://m.tb.cn/h.4RIXFXB",
					"name": "降解卡通手提袋", // 商品名称
					"goods_thumb": "https://img.alicdn.com/imgextra/i3/4126938430/O1CN01GZXpdN2C8zTwCEyjV_!!4126938430.jpg_600x600.jpg", // 商品缩略图，用于在列表或搜索结果中预览显示
					"shop_name": "思华旭昌数码专营店",
					"goods_price": "55.6", // 商品价格
				},
				{
					"category_id": "", // 分类id
					"url": "https://m.tb.cn/h.4RI3vlD",
					"name": "苏泊尔智能保温杯", // 商品名称
					"goods_thumb": "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2157661959/O1CN01kbg8p11QLGXh2ssXv_!!2157661959.jpg_430x430q90.jpg", // 商品缩略图，用于在列表或搜索结果中预览显示
					"shop_name": "苏泊尔餐具旗舰店",
					"goods_price": "229", // 商品价格
				},
				{
					"category_id": "", // 分类id
					"url": "https://m.tb.cn/h.4RIf5RP?sm=0dfdff",
					"name": "垃圾桶家用带盖分类", // 商品名称
					"goods_thumb": "https://img.alicdn.com/imgextra/i3/1902449617/O1CN01SD9or92KudXV9xzw7_!!0-item_pic.jpg", // 商品缩略图，用于在列表或搜索结果中预览显示
					"shop_name": "凯乐居旗舰店",
					"goods_price": "59.8", // 商品价格
				},
			]
		},

		onLoad() {
			let that = this;
			
		},
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
	
	.navigation {
		display: flex;
		margin-top: 100rpx;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 16rpx 0;
		.left {
			display: flex;
			font-size: 20rpx;
			.item {
				margin: 0 30rpx;
				&.car {
					text-align: center;
					position: relative;
					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}
		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;
			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}
			.cart {
				background-color: #ed3f14;
				margin-right: 30rpx;
			}
			.buy {
				background-color: #ff7900;
			}
		}
	}
	

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
