<template>
	<view>
		<!-- 头部区域 -->
		<view class="header">
			<image class="header-img" :src="hdUrl" @click="onHeader"></image>
			<view class="nick-name" @click="onNickName">{{ nickName }}</view>
		</view>
		<!-- 订单 -->
		<order @order-click="onOrders"></order>
		<!-- cell -->
		<cells @cell-selected="onSelected"></cells>
	</view>
</template>

<script>
import order from '../../components/zy-my/my-order.vue';
import cells from '../../components/zy-my/my-cells.vue';
export default {
	components: {
		order,
		cells
	},
	data() {
		return {
			hdUrl: '../../static/imgs/header_default.png',
			nickName: '未登录，点击登录',
			showData: [
				{ name: '我的收藏', tag: 'favorit' },
				{ name: '优惠券', tag: 'coupon' },
				{ name: '收货地址', tag: 'address' },
				{ name: '联系客服', tag: 'servicer' },
				{ name: '关于我们', tag: 'about' }
			]
		};
	},
	methods: {
		onHeader() {
			console.log('点击了头像...');
		},
		onNickName() {
			console.log('未登录，进行登录；否则显示用户信息...');
		},
		onOrders(sIndex) {
			alert(sIndex);
		},
		onList(lIndex) {
			alert(lIndex);
		},
		onSelected(cIndex) {
			console.log('点击 = ' + cIndex)
			uni.navigateTo({
				url: '../my/setting?index=' + cIndex,
				animationDuration: 200,
				animationType: 'slide-in-right'
			})
		}
	}
};
</script>

<style lang="less" scoped>
.header {
	background-color: #ffffff;
	text-align: center;
	.header-img {
		margin-top: 30px;
		width: 64px;
		height: 64px;
		border-radius: 32px;
	}
	.nick-name {
		font-size: 19px;
		color: #333333;
		padding-top: 5px;
		padding-bottom: 25px;
	}
}
.list {
	// margin: 0px 15px 15px 15px;
	// margin-top: 30px;
	margin-left: 15px;
	margin-right: 15px;
	border-radius: 3px;
	.item {
		height: 54px;
		text {
			padding-left: 5px;
			line-height: 20px;
			color: #333333;
			font-size: 16px;
		}
		.arrow {
			width: 20px;
			height: 20px;
		}
	}
}
</style>
