<template>
	<view class="container">
		<view class="left"><image class="img" :src="showData.imgUrl"></image></view>
		<view class="right">
			<text class="name">{{ showData.name }}</text>
			<view class="sub-name">{{ showData.subName }}</view>
			<text class="price-sign">¥</text>
			<text class="price-value">{{ showData.price }}</text>
			<view>
				<text class="tag" v-for="(tag, index) in showData.tags" :key="index" :class="index > 0 ? 'tag-left-margin' : null">{{ tag }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		showData: {
			type: Object,
			require: true
		}
	}
};
</script>

<style lang="less" scoped>
.container {
	display: flex;
	.left {
		height: 114px;
		width: 104px;
		.img {
			width: 100% - 5px;
			height: 100%;
			border-radius: 3px;
		}
	}
	.right {
		flex: 1;
		.name {
			margin-top: 2px;
			font-size: 15px;
			color: #333333;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.sub-name {
			margin-top: 5px;
			font-size: 12px;
			color: #999999;
		}
		.price-sign {
			color: #fc511f;
			font-size: 12px;
		}
		.price-value {
			color: #fc511f;
			font-size: 17px;
		}
		.tag {
			font-size: 10px;
			background-color: #fc511f;
			color: #ffffff;
			border-radius: 3px;
			padding-left: 3px;
			padding-right: 3px;
		}
		.tag-left-margin {
			margin-left: 5px;
		}
	}
}
</style>
