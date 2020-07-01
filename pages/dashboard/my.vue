<template>
	<view>
		<!-- 头部区域 -->
		<view class="header">
			<image class="header-img" :src="hdUrl" @click="onHeader"></image>
			<view class="nick-name" @click="onNickName">{{ nickName }}</view>
		</view>
		<!-- 订单 -->
		<order class="order-status" @order-click="onOrders"></order>
		<!-- cell -->
		<uni-list class="list">
			<uni-list-item
				class="item"
				v-for="(item, index) in showData"
				:key="index"
				:thumb="'../../static/imgs/my_l_' + item.tag + '.png'"
				:showArrow="false"
				@click="onList(index)"
			>
				<template v-slot="">
					<text>{{ item.name }}</text>
				</template>
				<template v-slot:right="">
					<image class="arrow" mode="widthFix" src="../../static/imgs/arrow_right.png"></image>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
import order from '../../components/zy_my/my-order.vue';
export default {
	components: {
		order
	},
	data() {
		return {
			hdUrl: '../../static/imgs/header_default.png',
			nickName: '未登录，点击登录',
			showData: [
				{ name: '优惠券', tag: 'coupon' },
				{ name: '收货地址', tag: 'address' },
				{ name: '我的收藏', tag: 'favorit' },
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
.order-status {
	margin: 15px;
}
.list {
	margin: 15px;
	border-radius: 3px;
	.item {
		height: 54px;
		text {
			padding-left: 6px;
			color: #333333;
			font-size: 17px;
		}
		.arrow {
			width: 20px;
			height: 20px;
		}
	}
}
</style>
