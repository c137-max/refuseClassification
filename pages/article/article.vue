<template>
	<page-meta
	<navigation-bar
	  :title="title"
	/>
	</page-meta>
	<view>
		<image class="image" :src="image_src" mode="aspectFit"></image>
	</view>
	<view>
		<view>
			<text>{{content}}</text>
		</view>
		<view>
			<text>作者：{{author}}</text>
		</view>
	</view>
	
	

</template>

<script>
	export default {
		data() {
			return {
				title: "",
				author: "",
				image_src: "",
				content: ""
			}
		},
		methods: {
			
		},
		onShow() {
			let that = this;
			var data = {
				title: "关于推进垃圾分类工作的建议",
				author: "中共六安市委统战部",
				image_src: "",
				content: "垃圾是放错了位置的资源，垃圾分类不是一个新命题，但却是一道老难题。在一些大城市已经对生活垃圾做了更细致的分类收集。在我市垃圾果壳箱绝大部分都更换成了不可回收和可回收的新型标准果壳箱，即使这样，群众投放垃圾的时候也基本上不分类，在大部分的小区里，居民们也还没有做到垃圾分类投放。知晓和支持并不意味着能够身体力行、坚持到底。从我市的基本情况来看，初期绝大多数居民都能够积极支持，但随着时间的推移，很多都半途而废。原因无非是以下几点：略",
			}
			that.title = data.title;
			that.author = data.author;
			if (data.image_src==""){
				that.image_src = "../../static/images/selected/huanbao_1.png"
			}
			that.content = data.content;
		}
	}
</script>

<style>
	.image{
		text-align: center; 
		width: 100%; 
		border: green solid 1px;
	}
</style>
