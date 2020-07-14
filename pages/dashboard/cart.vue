<template>
	<view>
		<uni-list
			v-for="(item, index) in products"
			:key="index"
			:show-arrow="false"
			@checked="onChecked"
			@spec-changed="onSpec"
			@click="onDetail(item.prdId)"
		>
			<cell :show-data="item"></cell>
		</uni-list>
	</view>
</template>

<script>
import cell from '../../components/zy-cart/cart-cell.vue';
export default {
	components: {
		cell
	},
	data() {
		return {
			products: []
		};
	},
	methods: {
		onDetail(sObj) {
			// 当前值
		},
		onChecked(cIndex) {
			console.log('选中 = ' + cIndex);
		},
		onSpec() {
			console.log('保险公司');
		}
	},
	onLoad() {
		let obj1 = {
			prdId: 1,
			name: '茅台镇散酒批发 53度酱香型散酒十斤桶装低价白酒 纯粮食散装白酒',
			imgUrl: 'https://cbu01.alicdn.com/img/ibank/2019/610/602/10761206016_1924016521.220x220.jpg?_=2020',
			subName: '酒精度：50%vol. | 清香型',
			price: '58.00',
			tags: ['破损包赔', '领券']
		};
		this.products.push(obj1)
	}
};
</script>

<style>
.container {
	width: 320px;
	/* height: 49px; */
	background-color: #ffffff;
	margin-left: 50px;
	padding-left: 10px;
	padding-right: 10px;
}
.search {
	margin-left: 15px;
	/* margin-bottom: 15px; */
	width: 100px;
}
</style>
