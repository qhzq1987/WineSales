<template>
	<view>
		<!-- 滚动广告 -->
		<swiper
			class="ad-swiper"
			indicator-dots="true"
			autoplay="true"
			circular="true"
			indicator-active-color="#559BFF"
			indicator-color="#F8F8F8"
		>
			<swiper-item v-for="(item, index) in ads" :key="index"><image class="img" :src="item.imgUrl"></image></swiper-item>
		</swiper>
		<!-- 公告 -->
		<notices class="notice-container" :show-data="notices"></notices>
		<!-- 活动入口 -->
		<acts class="act-container" @act-click="onAct" ref="refacts"></acts>
		<!-- 优惠入口 -->
		<view class="pro-container" @click="onAct(99)"><view class="item">浓香经典 双瓶钜惠</view></view>
		<!-- 申明 -->
		<declare></declare>
	</view>
</template>

<script>
import notices from '../../components/home-notices.vue';
import acts from '../../components/home-acts.vue';
import declare from '../../components/home-declare.vue';
export default {
	components: {
		notices,
		acts,
		declare
	},
	data() {
		return {
			ads: [],
			notices: [],
			act: []
		};
	},
	onLoad() {
		// 默认滚动图片
		this.ads = [
			{
				imgUrl: '../../static/imgs/home_swiper_01.jpg'
			},
			{
				imgUrl: '../../static/imgs/home_swiper_02.jpg'
			},
			{
				imgUrl: '../../static/imgs/home_swiper_03.jpg'
			}
		];
		// 默认通知
		this.initNotice();
	},
	methods: {
		initNotice() {
			let tempObj = [
				{
					type: '推广',
					title: '品味亦生活，甬定烟酒商场，帮您定位高端品位，细享生活百味。'
				},
				{
					type: '优惠',
					title: '用“真品”服务，用“真情”开店。'
				},
				{
					type: '消息',
					title: '五粮茅台尽真品，冬虫夏草价实在。'
				}
			];
			// 重组数据格式
			this.reformNotice(tempObj);
			// 倒计时时间
			//this.$refs.refacts.counterTimer(24, 0, 0);
		},
		onAct(tIndex) {
			alert(tIndex);
		},
		reformNotice(nObj) {
			// 如果是单条数，则补齐双数，如果1、3、5、7...则要补为：2、4、6、8
			let sourceObj = nObj;
			if (nObj.length % 2 > 0) {
				sourceObj.push(nObj[0]);
			}
			// 重组消息内容，注：2个为一组！！！
			let resultObj = [];
			let tempObj = {};
			sourceObj.forEach((item, i) => {
				// mod值
				let tempIndex = (i + 1) % 2;
				// 重组值
				tempObj['title' + tempIndex] = item.title;
				tempObj['type' + tempIndex] = item.type;
				// mod值
				if (tempIndex === 0) {
					resultObj.push(tempObj);
					tempObj = {};
				}
			});
			// 更新值
			this.notices = resultObj;
		}
	}
};
</script>

<style lang="less" scoped>
.ad-swiper {
	height: 154px;
	.img {
		width: 100%;
		height: 100%;
	}
}

.notice-container {
	margin-top: 10px;
}

.act-container {
	margin-top: 10px;
}

.pro-container {
	background-color: #ffffff;
	height: 119px;
	text-align: center;
	.item {
		margin: 0px 15px 0px 15px;
		height: 104px;
		border-radius: 3px;
		background-color: #f4624a;
		color: #ffffff;
		font-size: 24px;
		line-height: 94px;
	}
}
</style>
