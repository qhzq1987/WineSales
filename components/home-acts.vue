<template>
	<view class="container">
		<view class="item-container">
			<view class="content content-timer" @click="toAct(0)">
				<view class="title-text">限时抢购</view>
				<view class="subtitle-text">{{ timeText }}</view>
			</view>
		</view>
		<view class="item-container">
			<view class="content content-minus" @click="toAct(1)">
				<view class="title-text">超值减</view>
				<view class="subtitle-text">满1000减188</view>
			</view>
		</view>
		<view class="item-container">
			<view class="content content-gift"  @click="toAct(2)">
				<view class="title-text">佳节好礼</view>
				<view class="subtitle-text">与Ta分享美酒</view>
			</view>
		</view>
		<view class="item-container">
			<view class="content content-employee"  @click="toAct(3)">
				<view class="title-text">员工买酒</view>
				<view class="subtitle-text">买一送一</view>
			</view> 
		</view>
	</view>
</template>

<script>
export default {
	props: {
	},
	data() {
		return {
			timeText: '已结束',
			timer: null,
			time: [0, 0, 0]
		};
	},
	methods: {
		toAct(tIndex) {
			this.$emit('act-click', tIndex);
		},
		onTimer () {
			// 秒
			let seconds = this.time[2] - 1
			if (seconds < 0) {
				seconds = 59
				let min = this.time[1] - 1
				if (min < 0) {
					min = 59
					let hour = this.time[0] - 1
					if (hour < 0) {
						hour = 0
					}
					this.time[0] = hour
				}
				this.time[1] = min
			}
			this.time[2] = seconds
			//处理时间格式
			let tempVal = ''
			this.time.forEach((item, i) => {
				tempVal += (i > 0 ? ':' : '')
				tempVal += (item > 10 ? item : ('0' + item))
			})
			this.timeText = tempVal
		},
		resetTimer () {
			// 销毁
			if (this.timer) {
				clearInterval(this.timer)
				this.timer = null
			}
		},
		counterTimer (hour, min, seconds) {
			// 处理时间
			this.time = [hour, min, seconds]
			// 定时器
			this.timer = setInterval(this.onTimer, 1000)
		}
	},
	beforeDestroy() {
		// 销毁
		this.resetTimer()
	}
};
</script>

<style lang="less" scoped>
.container {
	background-color: #ffffff;
	display: flex;
	flex-wrap: wrap;
	.item-container {
		width: 50%;
		.content {
			text-align: center;
			color: #ffffff;
			border-radius: 3px;
			height: 94px;
			.title-text {
				font-size: 20px;
				line-height: 64px;
			}
			.subtitle-text {
				font-size: 15px;
				line-height: 0px;
			}
		}
		.content-timer {
			background-color: #559BFF;
			margin: 15px 5px 5px 15px;
		}
		.content-minus {
			background-color: #38D0B5;
			margin: 15px 15px 5px 5px;
		}
		.content-gift {
			background-color: #F89D41;
			margin: 5px 5px 15px 15px;
		}
		.content-employee {
			background-color: #36CDE2;
			margin: 5px 15px 15px 5px;
		}
	}
}
</style>
