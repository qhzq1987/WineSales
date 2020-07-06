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
			<view v-for="(item, index) in prdInfo.proInfos" :key="index">
				<text class="type">{{ item.type }}</text>
				<text class="content">{{ item.content }}</text>
			</view>
		</view>
		<view class="prd-spec" @click="onSepc">
			<text class="title">商品规格</text>
			<!-- 箭头、选择值都是‘右’浮动，所以排版从右至左排版 -->
			<image class="arrow" src="../../static/imgs/arrow_right.png"></image>
			<text class="value">{{ specsTxt }}</text>
		</view>
		<view class="prd-detail"><text class="title">商品详情</text></view>
		<!-- 底部操作 -->
		<btmopts :favorit="prdInfo.favorit" @go-cart="onGoCart" @favorit="onFavorit" @add-cart="onAddCart" @buy-now="onBuyNow"></btmopts>
		<!-- 规格弹出 -->
		<uni-popup ref="refpopup" type="bottom">
			<spec :price="prdInfo.price" :showSpecs="prdInfo.specs" @add-cart="onAddCart" @buy-now="onBuyNow"></spec>
		</uni-popup>
	</view>
</template>

<script>
import btmopts from '../../components/zy-categories/detail-opts.vue';
import spec from '../../components/zy-categories/detail-spec.vue';
export default {
	components: {
		spec,
		btmopts
	},
	data() {
		return {
			prdImgs: [],
			prdId: '',
			prdInfo: {},
			currPage: 1,
			specsTxt: '请选择'
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
			specs: ['1件(500ml*2瓶)', '1瓶(500ml)', '1箱(500*6瓶)'],
			favorit: 0
		};
	},
	methods: {
		onSwiperChange(event) {
			// 当前页
			this.currPage = event.detail.current + 1;
		},
		onShare() {
			console.log('share...');
		},
		onSepc() {
			// 规格
			this.$refs.refpopup.open();
		},
		onAddCart() {
			uni.showToast({
				title: '已加入购物车',
				duration: 1500,
				success: () => {
					this.$refs.refpopup.close();
				}
			});
		},
		onBuyNow() {
			console.log('生成订单...');
		},
		onGoCart() {
			console.log('购物车');
		},
		onFavorit() {
			// 是否收藏？
			this.prdInfo.favorit = this.prdInfo.favorit === 1 ? 0 : 1;
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
	background-color: #ffffff;
}
.prd-price {
	padding-left: 15px;
	padding-bottom: 10px;
	color: #fc511f;
	background-color: #ffffff;
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
	background-color: #ffffff;
	padding-bottom: 10px;
	.seperator {
		background-color: #eeeeee;
		height: 1px;
		margin-left: 15px;
		margin-bottom: 6px;
	}
	.type {
		margin-left: 15px;
		padding: 0px 4px 0px 4px;
		font-size: 10px;
		background-color: #fc511f;
		color: #ffffff;
		border-radius: 3px;
	}
	.content {
		font-size: 13px;
		padding-left: 7px;
	}
}
.prd-spec {
	background-color: #ffffff;
	margin-top: 10px;
	padding: 15px 0px 15px 15px;
	.title {
		color: #333333;
		font-size: 15px;
	}
	.arrow {
		float: right;
		margin-right: 12px;
		width: 20px;
		height: 20px;
	}
	.value {
		color: #999999;
		font-size: 15px;
		float: right;
		margin-right: 5px;
	}
}
.prd-detail {
	background-color: #ffffff;
	margin-top: 10px;
	padding: 15px 0px 15px 15px;
	.title {
		color: #333333;
		font-size: 15px;
	}
}
</style>
