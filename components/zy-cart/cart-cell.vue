<template>
	<view>
		<label>
			<checkbox value="cb">未选中</checkbox>
		</label>
		<view>
			<radio :id="showData.name" :value="showData.name" :checked="true" @change="onChange"></radio>
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
	},
	data() {
		return {
			checked: false
		}
	},
	methods: {
		onChange(event) {
			let tempVal = event.detail.value
			this.checked = !tempVal
			console.log('REFT = ' + tempVal)
		}
	}
}
</script>

<style lang="less" scoped>
.container {
	height: 164px;
	
}
</style>
