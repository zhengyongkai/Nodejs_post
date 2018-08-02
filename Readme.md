使用方法
var Get=require('./http_get'),


Get用法
Get.app('get',req,function(data){
		console.log(data.pre);
})

Post用法
 Get.app('post',req,function(s){
	 	
	 	console.log(s);

 })