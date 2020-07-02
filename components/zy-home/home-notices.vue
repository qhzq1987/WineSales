<template>
	<view class="container" @click="onNotices">
		<view class="left">
			<text class="left-text">{{ name }}</text>
		</view>
		<view class="right">
			<swiper class="right-swiper" autoplay="true" circular="true" vertical="true">
				<swiper-item v-for="(item, index) in showData" :key="index">
					<view class="right-notice">
						<view class="type-text type-text-00">{{ item.type0 }}</view>
						<text class="title-text">{{ item.title0 }}</text>
					</view>
					<view class="right-notice">
						<view class="type-text type-text-01">{{ item.type1 }}</view>
						<text class="title-text title-text-01">{{ item.title1 }}</text>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		showData: {
			require: true,
			type: Array
		}
	},
	data() {
		return {
			name: '公告'
		};
	},
	methods: {
		onNotices () {
			this.$emit('notices-click')
		}
	}
};
</script>

<style lang="less" scoped>
.container {
	margin-top: 10px;
	height: 74px;
	display: flex;
	background-color: #ffffff;
	align-items: center;
	.left {
		height: 50%;
		border-right: 1px solid #eeeeee;
	}
	.right {
		flex: 1;
	}
}

.left-text {
	padding: 0px 15px 0px 15px;
	font-size: 21px;
	font-weight: bold;
	color: #fc511f;
	line-height: 35px;
}

.right-swiper {
	margin: 0px 15px 0px 15px;
	height: 46px;
}

.right-notice {
	display: flex;
	// 类型
	.type-text {
		height: 18px;
		width: 38px;
		border-radius: 9px;
		font-size: 12px;
		color: #ffffff;
		text-align: center;
	}
	// 区分样式
	.type-text-00 {
		margin-top: 3px;
		background-color: #0088f1;
	}
	.type-text-01 {
		margin-top: 6px;
		background-color: #ffa200;
	}
	// 滚动标签样式
	.title-text {
		margin-left: 5px;
		height: 20px;
		flex: 1;
		color: #333333;
		font-size: 15px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.title-text-01 {
		margin-top: 4px;
	}
}
</style>
