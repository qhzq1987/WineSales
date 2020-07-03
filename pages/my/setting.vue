<template>
	<view>
		<view class="search">
			<uni-search-bar placeholder="搜索" cancelButton="none" maxlength="20" @confirm="onSearch"></uni-search-bar>
		</view>
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
	onLoad(params) {
		console.log('rt357444YYYYY === ' + params.index + ' ======AAAA')
	},
	methods: {
		onSearch(sObj) {
			// 当前值
			this.searchText = sObj.value
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
