<template>
	<view class="container">
		<!-- 总价 -->
		<view class="price">¥{{ updatePrice }}</view>
		<!-- 规格 -->
		<view class="spec-title">请选择商品规格</view>
		<view class="spec-tag">
			<view
				class="tag"
				v-for="(item, index) in showSpecs"
				:key="index"
				:class="index === selectedIndex ? 'tag-selected' : 'tag-normal'"
				@click="onSpecSelected(index)"
			>
				<text>{{ item }}</text>
			</view>
		</view>
		<!-- 数量 -->
		<view class="quantity-title">数量</view>
		<view class="quantity-value">
			<text class="opt-minus" @click="onQuantity(-1)">-</text>
			<view class="value">{{ quantity }}</view>
			<text class="opt-plus" @click="onQuantity(1)">+</text>
		</view>
		<!-- 操作按钮 -->
		<view class="opts">
			<view class="add-cart" @click="onAddCart">加入购物车</view>
			<view class="buy-now" @click="onBuyNow">立即购买</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		price: {
			type: Number,
			require: true
		},
		showSpecs: {
			type: Array,
			require: true
		}
	},
	data() {
		return {
			selectedIndex: 0,
			quantity: 1
		};
	},
	methods: {
		onSpecSelected(sIndex) {
			// 选择索引
			this.spceSelectedIndex = sIndex;
		},
		onQuantity(value) {
			// 数量控制在1~100之间
			let tempVal = this.quantity + value;
			if (tempVal < 1) {
				tempVal = 1;
			} else if (tempVal > 100) {
				tempVal = 100;
			}
			this.quantity = tempVal;
		},
		onAddCart() {
			this.$emit('add-cart')
		},
		onBuyNow() {
			this.$emit('bue-now')
		}
	},
	computed: {
		updatePrice() {
			// 重新计算价格
			let tempVal = this.quantity * this.price
			return tempVal + '.00'
		}
	}
};
</script>

<style lang="less" scoped>
.container {
	background-color: #ffffff;
	.price {
		padding-left: 15px;
		padding-top: 20px;
		color: #fc511f;
		font-size: 25px;
		font-weight: 700;
	}
	.spec-title {
		font-size: 17px;
		color: #333333;
		padding-left: 15px;
		padding-top: 10px;
	}
	.spec-tag {
		margin-top: 8px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		.tag {
			border-radius: 11px;
			height: 22px;
			font-size: 15px;
			padding-left: 8px;
			padding-right: 8px;
			margin-left: 15px;
		}
		.tag-normal {
			border: #666666 1px solid;
			color: #666666;
		}
		.tag-selected {
			border: #fc511f 1px solid;
			color: #fc511f;
		}
	}
	.quantity-title {
		font-size: 17px;
		color: #333333;
		padding-left: 15px;
		padding-top: 15px;
	}
	.quantity-value {
		margin-left: 15px;
		margin-top: 8px;
		height: 38px;
		width: 114px;
		border-radius: 19px;
		border: #666666 1px solid;
		font-size: 19px;
		display: flex;
		line-height: 34px;
		.opt-minus {
			padding-left: 15px;
			padding-right: 15px;
			color: #333333;
		}
		.value {
			color: #333333;
			width: 114px;
			text-align: center;
		}
		.opt-plus {
			color: #fc511f;
			padding-left: 15px;
			padding-right: 15px;
		}
	}
	.opts {
		margin: 40px 15px 0px 15px;
		height: 44px;
		display: flex;
		line-height: 44px;
		color: #ffffff;
		padding-bottom: 50px;
		.add-cart {
			height: 100%;
			width: 50%;
			text-align: center;
			border-top-left-radius: 22px;
			border-bottom-left-radius: 22px;
			background-color: #57bdff;
		}
		.buy-now {
			height: 100%;
			width: 50%;
			text-align: center;
			border-top-right-radius: 22px;
			border-bottom-right-radius: 22px;
			background-color: #559bff;
		}
	}
}
</style>
