<template>
	<view>
		<view class="wrap">
			<view class="u-tabs-box">
				<!-- :active-color="color" -->
				<u-tabs-swiper ref="tabs"   :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<u-card title="可回收垃圾">
							<view class="" slot="body">
								<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
									<view class="u-body-item-title">指的是纸张、废塑料、废玻璃制品、废金属、废织物等适宜回收、可循环利用的生活废弃物</view>
									<u-image height="210rpx" src="/static/images/可回收垃圾.svg" ></u-image>
								</view>
								<view class="u-body-item u-flex u-row-between u-p-b-0">
									<view class="u-body-item-title u-line-2">
										<view>投放要求</view>
										<uni-list>
											<uni-list-item title="1.尽量保持清洁干燥,避免污染"></uni-list-item>
											<uni-list-item title="2.废纸应该保持平整,玻璃制品应轻投轻放"></uni-list-item>
											<uni-list-item title="3.立体包装物应清空内容物,清洁后压扁投放"></uni-list-item>
											<uni-list-item title="4.有尖锐边角应包裹后投放"></uni-list-item>
										</uni-list>
									</view>
								</view>
								<view class="u-body-item u-flex u-row-between u-p-b-0">
									<view class="u-body-item-title ">
										<view>常见物品</view>
										<u-tag text="玻璃瓶" shape="circle" type="success" />
										<u-tag text="酱油瓶" shape="circle" type="success" />
										<u-tag text="平板玻璃" shape="circle" type="success" />
										<u-tag text="易拉罐" shape="circle" type="success" />
										<u-tag text="饮料瓶" shape="circle" type="success" />
										<u-tag text="洗发水瓶" shape="circle" type="success" />
										<u-tag text="塑料玩具" shape="circle" type="success" />
										<u-tag text="书本" shape="circle" type="success" />
										<u-tag text="报纸" shape="circle" type="success" />
										<u-tag text="广告单" shape="circle" type="success" />
										<u-tag text="纸板箱" shape="circle" type="success" />
										<u-tag text="衣服" shape="circle" type="success" />
									</view>
								</view>
							</view>

						</u-card>

					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<u-card title="有害垃圾">
							<view class="" slot="body">
								<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
									<view class="u-body-item-title ">指废电池、废灯管、废药品、废油漆及其容器等对人体健康或者自然环境造成直接或者潜在危害的生活废弃物</view>
									<u-image height="210rpx" src="/static/images/有害垃圾.svg" ></u-image>
								</view>

								
								<view class="u-body-item u-flex u-row-between u-p-b-0">
									<view class="u-body-item-title u-line-2">
										<view>投放要求</view>
										<uni-list>
											<uni-list-item title="1.投放时注意轻放"></uni-list-item>
											<uni-list-item title="2.易破损的请连带包装或者包裹后轻放"></uni-list-item>
											<uni-list-item title="3.如易挥发,请密封后投放"></uni-list-item>
										</uni-list>
									</view>
								</view>
								<view class="u-body-item u-flex u-row-between u-p-b-0">
									<view class="u-body-item-title ">
										<view>常见物品</view>
										<u-tag text="废电池" shape="circle" type="error" />
										<u-tag text="温度计" shape="circle" type="error" />
										<u-tag text="油漆桶" shape="circle" type="error" />
										<u-tag text="银光灯管" shape="circle" type="error" />
										<u-tag text="废药品" shape="circle" type="error" />
										<u-tag text="杀虫剂" shape="circle" type="error" />
										<u-tag text="医用纱布" shape="circle" type="error" />
										<u-tag text="医用棉签" shape="circle" type="error" />
										<u-tag text="打火机" shape="circle" type="error" />
										<u-tag text="创可贴" shape="circle" type="error" />
										<u-tag text="酒精调色板" shape="circle" type="error" />
									</view>
								</view>
							</view>

						</u-card>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<u-card title="湿垃圾">
							<view class="" slot="body">
								<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
									<view class="u-body-item-title ">即易腐败的垃圾，指食材废料、剩菜剩饭、过期食品、瓜皮果核、花卉绿植、中药药渣等易腐败的生物质生活废弃物</view>
									<u-image height="210rpx" src="/static/images/湿垃圾.svg" ></u-image>
								</view>

			
								<view class="u-body-item u-flex u-row-between u-p-b-0">
									<view class="u-body-item-title u-line-2">
										<view>投放要求</view>
										<uni-list>
											<uni-list-item title="1.投放前尽量沥干水分"></uni-list-item>
											<uni-list-item title="2.有包装的湿垃圾应将包装物去除后分类投放"></uni-list-item>
											<uni-list-item title="3.盛放湿垃圾的容器,在投放时应予去除"></uni-list-item>
										</uni-list>
									</view>
								</view>
								<view class="u-body-item u-flex u-row-between u-p-b-0">
									<view class="u-body-item-title ">
										<view>常见物品</view>
										<u-tag text="剩饭" shape="circle" />
										<u-tag text="剩菜" shape="circle" />
										<u-tag text="瓜皮" shape="circle" />
										<u-tag text="果壳" shape="circle" />
										<u-tag text="花卉绿植" shape="circle" />
										<u-tag text="橙皮" shape="circle" />
										<u-tag text="葱" shape="circle" />
										<u-tag text="饼干" shape="circle" />
										<u-tag text="番茄酱" shape="circle" />
										<u-tag text="宠物饲料" shape="circle" />
										<u-tag text="蛋壳" shape="circle" />
										<u-tag text="西瓜皮" shape="circle" />
										<u-tag text="马铃薯" shape="circle" />
									</view>
								</view>
							</view>

						</u-card>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<u-card title="干垃圾">
							<view class="" slot="body">
								<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
									<view class="u-body-item-title ">即其他垃圾，指除了可回收物、有害垃圾、湿垃圾以外的其他的生活废弃物</view>
									<u-image height="210rpx" src="/static/images/干垃圾.svg" ></u-image>
								</view>

								<view class="u-body-item u-flex u-row-between u-p-b-0">
									<view class="u-body-item-title u-line-2">
										<view>投放要求</view>
										<uni-list>
											<uni-list-item title="1.投放前尽量沥干水分"></uni-list-item>
											<uni-list-item title="2.难以辨别类别的生活垃圾投入干垃圾容器内"></uni-list-item>
										</uni-list>
									</view>
								</view>
								<view class="u-body-item u-flex u-row-between u-p-b-0">
									<view class="u-body-item-title ">
										<view>常见物品</view>
										<u-tag text="纸盒" shape="circle" type="info" />
										<u-tag text="餐巾纸" shape="circle" type="info" />
										<u-tag text="湿纸巾" shape="circle" type="info" />
										<u-tag text="卫生间用纸" shape="circle" type="info" />
										<u-tag text="塑料袋" shape="circle" type="info" />
										<u-tag text="食品包装袋" shape="circle" type="info" />
										<u-tag text="污染严重的纸" shape="circle" type="info" />
										<u-tag text="烟蒂" shape="circle" type="info" />
										<u-tag text="纸尿裤" shape="circle" type="info" />
										<u-tag text="一次性杯子" shape="circle" type="info" />
										<u-tag text="贝壳" shape="circle" type="info" />
										<u-tag text="花盆" shape="circle" type="info" />
										<u-tag text="陶瓷" shape="circle" type="info" />
									</view>
								</view>
							</view>

						</u-card>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				list: [{
						name: '可回收垃圾'
					},
					{
						name: '有害垃圾'
					},
					{
						name: '湿垃圾'
					},
					{
						name: '干垃圾',
						// count: 12
					}
				],
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
				// color: "red";
				loadStatus: ['loadmore', 'loadmore', 'loadmore', 'loadmore'],
			};
		},
		onLoad() {},
		methods: {

			// tab栏切换
			change(index) {
				this.swiperCurrent = index;
			},
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}
		}
	};
</script>

<style>
	/* #ifndef H5 */
	page {
		height: 100%;
		background-color: #f2f2f2;
	}

	/* #endif */
</style>

<style lang="scss" scoped>
	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;
	}

	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		height: 100%;
	}

	.pic {
		height: 30px;
	}
</style>
