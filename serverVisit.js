// 使用http模块
// 第一步，加载http模块

var http = require("http");
// 第二步，使用http.createServer()方法创建一个Web服务器
// 返回一个Server实例
 var server=http.createServer();
//提供服务：数据的服务
// 发请求
// 接受请求
// 处理请求
// 给反馈，发送响应
// 注册request请求事件
// 当客户端请求过来，就会自动触发服务器的request请事件然后执行第二个参数，回调处理
// 绑定端口号启动服务器
server.listen(8888,function(){
    console.log('服务器启动成功，可通过 http://localhost:3000访问');
    
});

server.on('request',function(){
    console.log('收到客户端的访问请求');
});
