//实现导航永远可见的状态
angular.module("myapp")
	   .directive("navTop",function(){
	   	//判断scroll的距离顶部的高度大于banner图的高度时导航就显示在盒子的顶部可见
		//求滚动的高度
		return{
			controller:function($scope,$element,$window){
				var window=angular.element($window)
				window.on("scroll",function(){
					var scrollY=this.scrollY
					var top=$element[0].offsetTop
					if(scrollY>=top){
						$element.css({"position":"fixed","top":45+"px","z-index":100})
					}else{
						$element.css({"position":"inherit","top":0})
					}
				})
				
			}	
		}
				
					
	   })
	