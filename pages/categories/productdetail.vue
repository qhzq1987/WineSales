<template>
	<view>
		<!-- 数量 -->
		<view class="img-page-number">
			<text class="current">{{ currPage }}/</text>
			<text class="total">{{ prdImgs.length }}</text>
		</view>
		<swiper class="swiper" @change="onSwiperChange">
			<swiper-item v-for="(item, index) in prdImgs" :key="index"><image class="img" :src="item"></image></swiper-item>
		</swiper>
		<view class="prd-name">{{ prdInfo.prdName }}</view>
		<view class="prd-price">
			<image class="share" src="../../static/imgs/share_wechat.png" @click="onShare"></image>
			<text class="sign">¥</text>
			<text class="value">{{ prdInfo.price }}</text>
		</view>
		<view class="pro-container">
			<view class="seperator"></view>
			<view></view>
			<view>
				<text>优惠</text>
				<text>456454545456</text>
			</view>
			<view>
				<text>优惠2</text>
				<text>第个消息456454545456</text>
			</view>
		</view>
		<view class="prd-spec">
			<text>商品规格</text>
		</view>
	</view>
</template>

<script>
import cell from '../../components/zy-categories/categories-cell.vue';
export default {
	components: {
		cell
	},
	data() {
		return {
			prdImgs: [],
			prdId: '',
			prdInfo: {},
			currPage: 1
		};
	},
	onLoad(params) {
		// 当前产品id值
		this.prdId = params.prdId;
		this.prdImgs = [
			'https://cbu01.alicdn.com/img/ibank/2019/810/879/12488978018_1460666650.120x120xz.jpg',
			'https://cbu01.alicdn.com/img/ibank/2019/989/349/12168943989_1460666650.120x120xz.jpg',
			'https://cbu01.alicdn.com/img/ibank/2019/560/447/12400744065_1460666650.120x120xz.jpg',
			'https://cbu01.alicdn.com/img/ibank/2019/803/729/12344927308_1460666650.120x120xz.jpg',
			'https://cbu01.alicdn.com/img/ibank/2019/960/023/12468320069_1460666650.120x120xz.jpg'
		];
		this.prdInfo = {
			prdName: '44茅台镇酱香型白酒53度纯粮食原浆陈年窖藏老酒125毫升单瓶厂家',
			price: '145.00',
			proInfos: [{ type: '满赠', content: '满499赠熊猫酒具一套' }, { type: '津贴', content: '下单立减15元' }],
			specs: ['1件（500ml*2瓶）']
		};
	},
	methods: {
		onSearch(sObj) {
			// 当前值
			this.searchText = sObj.value;
		},
		onSwiperChange(event) {
			// 当前页
			this.currPage = event.detail.current + 1;
		},
		onShare() {
			console.log('share...')
		}
	}
};
</script>

<style lang="less" scoped>
.swiper {
	height: 254px;
	.img {
		width: 100%;
		height: 100%;
	}
}
.img-page-number {
	background-color: rgba(0, 0, 0, 0.6);
	color: #ffffff;
	height: 26px;
	width: 84px;
	text-align: center;
	position: fixed;
	z-index: 99;
	margin-left: 100%-18px;
	margin-top: 200px;
	border-bottom-left-radius: 13px;
	border-top-left-radius: 13px;
	.current {
		font-size: 19px;
	}
	.total {
		font-size: 15px;
	}
}
.prd-name {
	padding-top: 15px;
	padding-left: 15px;
	padding-right: 15px;
	padding-bottom: 2px;
	font-size: 19px;
	color: #333333;
	background-color: #FFFFFF;
}
.prd-price {
	padding-left: 15px;
	padding-bottom: 10px;
	color: #fc511f;
	background-color: #FFFFFF;
	.sign {
		font-size: 15px;
	}
	.value {
		font-size: 21px;
		font-weight: 700;
	}
}
.share {
	float: right;
	width: 22px;
	height: 22px;
	margin-right: 15px;
}
.pro-container {
	// height: 74px;
	background-color: #FFFFFF;
	.seperator {
		background-color: #eeeeee;
		height: 1px;
		margin-left: 15px;
		margin-right: 0px;
	}
}
.prd-spec {
	background-color: #FFFFFF;
	margin-top: 10px;
}
</style>
