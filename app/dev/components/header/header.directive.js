angular.module("myapp").directive("headerDirective",function(){
	return {
		restict:"E",
		replace:true,
		templateUrl:"./components/header/header.html",
		scope:{
			backBtn : "@"
		},
		//实现显示隐藏back按钮
		controller : function( $scope,$state ){
			if( $scope.backBtn == "true" ){
				$scope.backShow = true;
			}else{
				$scope.backShow = false;
			}
			$scope.backFn =function(){
				history.go(-1) //并且点击返回上一步
			}

			
		}
	}
})