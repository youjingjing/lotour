//自定义scroll滚动条指令
angular.module("myapp").directive("infiniterScroll",function(){
	return {
		scope : {
			infiniterLoad : "&",
			infiniterFlag : "="
		},
		//定义控制器
		controller : function( $scope,$window ){
			var contentView = angular.element( $window )
			function getScrollBottom( scrollY ){
				var bodyHeight = document.body.offsetHeight,
					winHeight = window.innerHeight,
					ifBottom = false;//定义一个变量判断是否到达底部

				if( bodyHeight-scrollY <= winHeight+50){
					ifBottom = true;
				}else{
					ifBottom = false;
				}
				return ifBottom;
			}
			contentView.on( "scroll",function(){
				if( !$scope.infiniterFlag ) return false;
				if( getScrollBottom( this.scrollY ) ){
					$scope.infiniterLoad();
				}
			} )
		}
	}


})
