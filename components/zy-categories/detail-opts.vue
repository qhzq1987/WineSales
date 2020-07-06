<template>
	<view class="container">
		<image class="favorit" :src="favoritStatus" @click="onFavorit"></image>
		<image class="go-cart" src="../../static/imgs/prd_cart.png" @click="onGoCart"></image>
		<view class="opt-btn">
			<view class="add-cart" @click="onAddCart">加入购物车</view>
			<view class="buy" @click="onBuyNow">立即购买</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		favorit: {
			type: Number,
			default: 0
		}
	},
	methods: {
		onGoCart() {
			this.$emit('go-cart')
		},
		onFavorit() {
			this.$emit('favorit')
		},
		onAddCart() {
			this.$emit('add-cart')
		},
		onBuyNow() {
			this.$emit('bue-now')
		}
	},
	computed: {
		favoritStatus() {
			// 是否收藏？
			let tempVal = '../../static/imgs/' + (this.favorit === 1 ? 'prd_favorit_selected' : 'prd_favorit') + '.png'
			return tempVal
		}
	}
}
</script>

<style lang="less" scoped>
.container {
	background-color: #ffffff;
	height: 54px;
	width: 100%;
	position: fixed;
	bottom: 0;
	z-index: 99;
	.favorit {
		width: 32px;
		height: 32px;
		margin-left: 20px;
		margin-top: 10px;
	}
	.go-cart {
		width: 32px;
		height: 32px;
		margin-left: 15px;
	}
	.opt-btn {
		display: flex;
		justify-content: space-between;
		float: right;
		width: 204px;
		height: 34px;
		margin-right: 15px;
		margin-top: 10px;
		text-align: center;
		font-size: 15px;
		line-height: 34px;
		.add-cart {
			width: 48%;
			border-radius: 17px;
			border: #fc511f 1px solid;
			color: #fc511f;
		}
		.buy {
			width: 48%;
			border-radius: 17px;
			background-color: #5398FB;
			color: #FFFFFF;
		}
	}
}
</style>
