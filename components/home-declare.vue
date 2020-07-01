<template>
	<view class="container">
		<view class="item" v-for="(item, index) in showData" :key="index">
			<image class="img" :src="'../../static/imgs/home_' + item.tag + '.png'"></image>
			<view class="text">{{ item.name }}</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showData: [
				{ tag: 'heart', name: '匠心工艺' },
				{ tag: 'factory', name: '原厂直发' },
				{ tag: 'express', name: '臻品速享' },
				{ tag: 'service', name: '售后保障' }
			]
		};
	}
};
</script>

<style lang="less" scoped>
.container {
	margin: 35px 35px 35px 35px;
	display: flex;
	align-items: center;
	.item {
		height: 74px;
		width: 25%;
		text-align: center;
		.img {
			width: 30px;
			height: 30px;
		}
		.text {
			font-size: 14px;
			color: #666666;
		}
	}
}
</style>
