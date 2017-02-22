var app=angular.module("myapp",["ui.router"]);
app.controller("rootCtrl",function($scope){
	$scope.pagePadding = true;//判断是否显示页脚的一个变量
	$scope.$on( "hasHideEmit",function(event,data){
		console.log(data)//true
		$scope.pagePadding = !data; //fase
		$scope.$broadcast( "hasHide",data )//当不显示页脚时把事件传给子集footer
	})
})