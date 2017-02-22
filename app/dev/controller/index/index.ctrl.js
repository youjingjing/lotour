var app=angular.module("myapp")
	   .controller("myIndex",function($scope,$http){
	   	$scope.list=[];
	   	$scope.area=[];
	   	$http.jsonp("http://www.lotour.com/zhengwen/ajaxlist?url=-&page=1&pc=0&callback=angular.callbacks._0")
	   		 .then(function(data){ 
	   		 	$scope.list=data.data.param
			    var swiper = new Swiper('.swiper-container', {
		        	speed:1000,
			        autoplay: 1000,
			        autoplayDisableOnInteraction: false,
			        loop:true
			    });
	   		 },function(error){
	   		 	console.log(error)
	   		 });
   	   	$http.jsonp("http://m.lotour.com/xingqu/ajaxlist?tagId=-3&page=1&callback=JSON_CALLBACK")
   		 .then(function(data){ 
   		 	$scope.area=data.data.param;
   		 	console.log($scope.area)
   		 },function(error){
   		 	console.log(error)
   		 });
   		 //使用swiper实现图片轮播的效果
     
	    //实现当滑到某一位置时实现加载
	    var loadList = function(){
		var pageIndex = -1;
		var flg = true;//定义一个flg
		var that =this;
		this.flg = true;

		this.load= function(){
			if( !flg ) return false;
			flg = false;
			$http.jsonp( "http://m.lotour.com/xingqu/ajaxlist?tagId=" +pageIndex+ "&page=1&callback=JSON_CALLBACK" )
			.then(function(data){	
				console.log(data)
				if( data.data.code == 1 ){
					if( !data.data.param ){
						that.flg = false;
					}
					$scope.area = $scope.area.concat( data.data.param );
					pageIndex--;
					flg = true;
				}
			})
		}
	}

	$scope.loadList = new loadList();
   		
	   })



