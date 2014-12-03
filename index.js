var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle ={};	// 你可以把JavaScript的对象想象成一个键为字符串类型的字典。
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload; 
handle["/show"] = requestHandlers.show;

server.start(router.route,handle);