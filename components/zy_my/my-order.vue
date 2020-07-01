<template>
	<view class="container">
		<view class="title" @click="onOrders">
			<text>我的订单</text>
			<image class="arrow" src="../../static/imgs/arrow_right.png"></image>
			<view class="seperator"></view>
		</view>
		<view class="status">
			<view class="item" v-for="(item, index) in showData" :key="index" @click="onStatus(index)">
				<image class="img" :src="'../../static/imgs/my_os_' + item.tag + '.png'"></image>
				<view class="text">{{ item.name }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showData: [
				{ tag: 'payment', name: '待付款' },
				{ tag: 'dispatch', name: '待发货' },
				{ tag: 'shipped', name: '待收货' },
				{ tag: 'completed', name: '已完成' }
			]
		};
	},
	methods: {
		onOrders () {
			this.$emit('order-click', -1)
		},
		onStatus (sIndex) {
			this.$emit('order-click', sIndex)
		}
	}
};
</script>

<style lang="less" scoped>
.container {
	background-color: #ffffff;
	border-radius: 3px;
	.title {
		padding-left: 15px;
		padding-top: 15px;
		color: #333333;
		font-size: 18px;
		font-weight: 800;
	}
	.arrow {
		width: 20px;
		height: 20px;
		float: right;
		margin-right: 10px;
		margin-top: 5px;
	}
	.seperator {
		background-color: #eeeeee;
		height: 1px;
		margin: 18px 0px 0px -15px;
	}
	.status {
		display: flex;
		.item {
			margin: 15px;
			width: 25%;
			text-align: center;
			.img {
				width: 38px;
				height: 38px;
			}
			.text {
				font-size: 16px;
				color: #333333;
			}
		}
	}
}
</style>
