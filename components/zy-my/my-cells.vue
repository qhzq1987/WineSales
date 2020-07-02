<template>
	<view class="container">
		<view class="cell" v-for="(item, index) in showData" :key="index" @click="onCell(index)">
			<view class="seperator" v-if="index > 0 ? true : false"></view>
			<view class="content">
				<image class="img" :src="'../../static/imgs/my_l_' + item.tag + '.png'"></image>
				<text>{{ item.name }}</text>
			</view>
			<image class="arrow" src="../../static/imgs/arrow_right.png"></image>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
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
		onCell (cIndex) {
			this.$emit('cell-selected', cIndex)
		}
	}
};
</script>

<style lang="less" scoped>
.container {
	margin: 0px 15px 15px 15px;
	border-radius: 3px;
	background-color: #ffffff;
	.cell {
		height: 50px;
		.seperator {
			background-color: #eeeeee;
			height: 1px;
			margin-left: 15px;
		}
		.content {
			display: flex;
			height: 100%;
			align-items: center;
			.img {
				height: 20px;
				width: 20px;
				margin-left: 18px;
			}
			text {
				font-size: 15px;
				color: #333333;
				padding-left: 10px;
			}
		}
		.arrow {
			height: 20px;
			width: 20px;
			float: right;
			margin-right: 10px;
			margin-top: -35px;
		}
	}
}
</style>
