angular.module("myapp").directive("footerDirective",function(){
	return {
		restict:"E",
		replace:true,
		templateUrl:"./components/footer/footer.html",
		controller :function( $scope ){
			$scope.footerHide = false;//是否显示 
			$scope.$on("hasHide",function(event,data){
				console.log(data) //true
				$scope.footerHide = data; //显示有padding时将显示footer
			})
		}
	}
	
})