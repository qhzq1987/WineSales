<template>
	<view>
		<view class="search">
			<uni-search-bar placeholder="搜索" cancelButton="none" maxlength="20" @confirm="onSearch"></uni-search-bar>
		</view>
		<uni-list>
			<uni-list-item v-for="(item, index) in products" :key="index" :show-arrow="false" @click="onDetail(item.prdId)">
				<cell :show-data="item"></cell>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
import cell from '../../components/zy-categories/categories-cell.vue';
export default {
	components: {
		cell
	},
	data() {
		return {
			products: [],
			searchText: ''
		};
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
		let obj2 = {
			prdId: 2,
			name: '白酒厂家直销贵州特产茅台镇酱香型53度纯粮原浆楚魅洞藏封坛老酒',
			imgUrl: 'https://cbu01.alicdn.com/img/ibank/2020/615/423/16881324516_2108870157.220x220.jpg?_=2020',
			subName: '享首单包邮或首单立减',
			price: '499.00',
			tags: ['新品', '7天内发货']
		};
		let obj3 = {
			prdId: 3,
			name: '川老大小酒厂家批发浓香型老酒52度高度原浆酒高粱酒白酒',
			imgUrl: 'https://cbu01.alicdn.com/img/ibank/2020/714/250/14248052417_952818097.220x220.jpg?_=2020',
			subName: '72小时内安排发货 | 好评100%',
			price: '600.00',
			tags: ['包邮']
		};
		let obj4 = {
			prdId: 4,
			name: '五行合和·和之善酒厂家批发浓香型老酒52度高度原浆酒高粱酒白酒',
			imgUrl: 'https://cbu01.alicdn.com/img/ibank/2020/425/071/13460170524_952818097.220x220.jpg?_=2020',
			subName: '年份：3~8年 | 酱香型',
			price: '598.00',
			tags: ['公益', '满100减10元']
		};
		let obj5 = {
			prdId: 5,
			name: '贵州茅台镇酱香型白酒53度白酒纯粮食酒杜鹃酒喜宴整箱酒水批发',
			imgUrl:'https://cbu01.alicdn.com/img/ibank/2020/752/645/15032546257_1634169107.220x220.jpg?_=2020',
			subName: '后3天内安排发货 | 酱香型白酒',
			price: '81.00',
			tags: ['首单立减']
		};
		let obj6 = {
			prdId: 6,
			name: '中华老字号洞山三花酒浓香型白酒50度500ml瓶定制批发贴牌代工',
			imgUrl:'https://cbu01.alicdn.com/img/ibank/2019/507/432/12611234705_872756756.220x220.jpg?_=2020',
			subName: '50（％）| 保质期：999（年）',
			price: '98.00',
			tags: ['免费赊账', '15天包换', '坏单包赔'],
		};
		let obj7 = {
			prdId: 7,
			name: '44茅台镇酱香型白酒53度纯粮食原浆陈年窖藏老酒125毫升单瓶厂家',
			imgUrl:'https://cbu01.alicdn.com/img/ibank/2019/341/192/11536291143_1914830504.220x220.jpg?_=2020',
			subName: '酱香型白酒 | 保持期：500年',
			price: '9.00',
			tags: ['快递¥2', '72小时内发货']
		};
		let obj8 = {
			prdId: 8,
			name: '道光廿五道光二十五文化酒四大美女粮食酒系列送礼白酒一箱4瓶',
			imgUrl:'https://cbu01.alicdn.com/img/ibank/2019/915/942/12252249519_1460666650.220x220.jpg?_=2020',
			subName: '芝麻香型白酒 | 43（％）',
			price: '178.00',
			tags: ['卖家承担运费']
		}
		//
		this.products.push(obj1);
		this.products.push(obj2);
		this.products.push(obj3);
		this.products.push(obj4);
		this.products.push(obj5);
		this.products.push(obj6);
		this.products.push(obj7);
		this.products.push(obj8);
	},
	methods: {
		onSearch(sObj) {
			// 当前值
			this.searchText = sObj.value
		},
		onDetail(prdId) {
			uni.navigateTo({
				url: '../categories/productdetail?prdId=' + prdId,
				animationDuration: 200,
				animationType: 'slide-in-right'
			})
		}
	}
};
</script>

<style lang="less" scoped>
.search {
	background-color: #FFFFFF;
	padding: 5px 8px 0px 8px;
	.seperator {
		background-color: #eeeeee;
		height: 1px;
	}
}
</style>
