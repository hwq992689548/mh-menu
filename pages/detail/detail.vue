<template>
	<view style="width: 100%; align-content: center;">
		<view style="font-size: 30upx; font-weight: 450; color: #333333; text-align: center; width: 100%; margin-top: 200upx;">
			<text>我是详情页面</text> 
		</view>
		
		<view style="line-height: 100upx; padding-top: 100upx; margin-top: 100upx; width: 100%; text-align: center;">
		    <text class="title">可以加我v信一起聊天呀</text>
		</view>
		<view style="line-height: 100upx; padding-top: 100upx; width: 100%; text-align: center;">
		    <text class="title">hwq20080880</text>
		</view>
	</view>
</template>

<script>
	var beforeWebView = null;
	var currentWebview = null;
	export default {
		data() {
			return {
				
			};
		},
		onLoad(option) {
			var param = option.param
			
			this.showMasks()
			var pages = getCurrentPages();
			var page = pages[pages.length - 1];
			currentWebview = page.$getAppWebview();
			
			if(param == "top"){
				currentWebview.setStyle({
					 height: '70%', 
					 top: 0,
					 position:'absolute',
				})
				
			}else if(param == 'left'){
				currentWebview.setStyle({
					 height: '100%',
					 width: '75%',
					 position:'absolute',
				})
				
			}else if(param == 'right'){
				currentWebview.setStyle({
					 height: '100%', 
					 width: '75%',
					 right:'0%',
					 position:'absolute',
				})
			}else{
				//bottom
				currentWebview.setStyle({
					 height: '70%', 
					 top: '30%',
					 position:'absolute',
				})
			}
			
			
		},
		
		onBackPress() {
			//android的后退键 
			if(beforeWebView){
				beforeWebView.setStyle({
					mask:'none'
				})
			}
			 
		},
		
		methods:{
			back(){
				
				uni.navigateBack({  
				    delta: 1,
					animationDuration:240
				});
			},
			
			//显示蒙层
			showMasks(){
				var pages = getCurrentPages();//当前页
				var beforePage = pages[pages.length - 2];//上个页面
				beforeWebView = beforePage.$getAppWebview();
				beforeWebView.setStyle({
				 	mask:'rgba(0, 0, 0, 0.45)'
				})
				
				//监听蒙层点击事件
				beforeWebView.addEventListener('maskClick', function(){
					if(currentWebview != null){
						currentWebview.close('auto');
						uni.navigateBack({
				  		    delta:1
				  		})
					}
				  	beforeWebView.setStyle({
				  		mask:'none'
				  	})
				  	currentWebview = null
				},false); 
							
			},
			
		}
	}
</script>

<style>

	.title {
		
		font-size: 28upx;
		color: #999999;
	}
</style>
