<template>
	<view>
		<!-- 基本用法 -->
		<uni-search-bar @confirm="search" @input="input"></uni-search-bar>
		<!-- 自定义Placeholder -->
		<view class="container">
			<uni-search-bar @confirm="search" @input="input"></uni-search-bar>
		</view>
		<uni-search-bar class="search" placeholder="搜索" cancelButton="none" maxlength="20" @confirm="onSearch"></uni-search-bar>
		<!-- 设置圆角 -->
		<uni-search-bar :radius="100" @confirm="search"></uni-search-bar>
	</view>
</template>

<script>
export default {
	data () {
		return {
			keyword: ''
		}
	},
	methods: {
		onSearch(sObj) {
			// 当前值
			this.keyword = sObj.value
		}
	}
}
</script>

<style>
	.container {
		width: 320px;
		/* height: 49px; */
		background-color: #FFFFFF;
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
