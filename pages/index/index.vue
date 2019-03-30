<template>
	<view class="content">
		<button style="width: 200upx; height: 100upx; margin-top: 100upx; line-height: 100upx; background-color: #f5f5f5; color: black;"
		@click="didselectTopBtn">
			上
		</button>
		
		<button style="width: 200upx; position: absolute; left: 30upx; height: 100upx; margin-top: 100upx; line-height: 100upx; background-color: #f5f5f5; color: black;"
		@click="didselectLeft">
			左
		</button>
		
		<button style="width: 200upx; position: absolute; right: 30upx; height: 100upx; margin-top: 100upx; line-height: 100upx; background-color: #f5f5f5; color: black;"
		@click="didselectRightBtn">
			右
		</button>
		
		<button style="width: 200upx; height: 100upx; margin-top: 300upx; line-height: 100upx; background-color: #f5f5f5; color: black;"
		@click="didselectBottomBtn">
			下
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			didselectTopBtn(){
				uni.navigateTo({
					url:'../detail/detail?param=' + 'top',
					animationDuration:240,
					animationType:'slide-in-top'
				})
			},
			
			didselectLeft(){
				uni.navigateTo({
					url:'../detail/detail?param=' + 'left',
					animationDuration:240,
					animationType:'slide-in-left'
				})
			},
			
			didselectRightBtn(){
				uni.navigateTo({
					url:'../detail/detail?param=' + 'right',
					animationDuration:240,
					animationType:'slide-in-right'
				})
			},
			
			didselectBottomBtn(){
				uni.navigateTo({
					url:'../detail/detail?param=' + 'bottom',
					animationDuration:240,
					animationType:'slide-in-bottom'
				})
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
