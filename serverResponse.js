var http = require('http');
var server = http.createServer();
// request请求事件处理函数，需要接受两个参数：
//      request请求对象
//          请求对象可以用来获取客户端的一些请求信息，例如路径
//    Response响应对象
//          响应对象可以用来给客户端发送响应消息
server.on('request', function (request, Response) {
    //请求路径  http://localhost:3000/  显示的路径是：/
    //请求路径  http://localhost:3000/a 显示的路径是：/a
    //请求路径  http://localhost:3000/a/foo 显示的路径是：/a/foo
    console.log('收到了客户端的请求，请求路径是：' + request.url);

    // Response对象有一个方法，writewrite可以用来给客户端发送响应数据
    // write可以使用多次，但是最后一定要使用eng来结束响应，否则客户端会一直等待
    response.write('hello');
    // end告诉客户端我得话讲完了，你可以呈递给用户了
    response.end();
});
server.listen(3000, function () {
    console.log('服务器启动成功了，可以通过http://localhost:3000/  访问');

});