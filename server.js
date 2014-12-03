/**
*
*dec: 服务器
*
**/

var http = require("http");
var url = require("url");

function start(route,handle) {
	function onRequest(request,response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname; // 找出浏览器请求的URL路径
		console.log("Request  for "+pathname+"received.");
		route(handle,pathname,response,request);
		// request.setEncoding("utf8");	// 设置接收数据的编码格式为UTF-8

		// request.addListener("data",function(postDataChunk) {	//	注册了“data”事件的监听器，用于收集每次接收到的新数据块，并将其赋值给postData 变量
		// 	postData += postDataChunk;
		// 	console.log("Received POST data chunk'"+postDataChunk+"'.");
		// })

		// request.addListener("end",function() {
		// 	route(handle,pathname,response,postData);
		// })
			
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");		// 当我们在服务器访问网页时，我们的服务器可能会输出两次“Request received.”。那是因为大部分服务器都会在你访问 http://localhost:8888 /时尝试读取 http://localhost:8888/favicon.ico
}

exports.start = start;