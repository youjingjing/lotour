angular.module("myapp").controller("detailCtrl",function($scope,$http,$stateParams){
		// $scope.detailList=[]
		// $http.jsonp("")
			console.log($stateParams.id)
			$scope.$emit("hasHideEmit",true)//向父级发送一个事件将true发送过去 //定义一个是否显示footer的变量
	   })

	