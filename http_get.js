var req,res,callbacks,
	https,
	app,
	url=require('url'),
	querystring=require('querystring'),
	http=require('http')
var G={}

exports.init=function(){

}

var app=function(method,req,res){
	//console.log('1');
    if(method=='post'){
        G['post'](req,res);  /*执行注册的方法*/
    }else{
    	G['get'](req,res)
    }

}

//挂载方法
app.https=function(string,req,callback){
    G[string]=callback;
    console.log('3');
}

//执行http模块的post方法
app.https('post',req,function(call,callback){
	console.log('2');
	var results=''
	call.addListener('data',function(datas){
		results+=datas
	})
	call.addListener('end',function(){
		var data=querystring.parse(results.toString())
		callback(data)
	})
})

//执行get模块
app.https('get',req,function(call,callback){
	var pathname=url.parse(call.url).pathname;
	var paramStr=url.parse(call.url).query
	var param=querystring.parse(paramStr)
	// console.log(param);
	callback(param)
})


exports.app=app




