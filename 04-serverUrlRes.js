var http = require('http');
// 1.创建server
var server = http.createServer();
// 2.监听request请求事件，设置请求处理函数
server.on('request', function (req, res) {
    console.log('请求收到了，请求路径是：' + req.url);
    // res.write('hello');
    // res.end();
    // 上面的方式比较麻烦，推荐直接用end的同时发送相应结果
    // res.end('helloworld');
    // 根据不同的请求路径发送不同的响应结果
    // 1.获取请求路径
    // req.url获取的是端口号之后的那一部分路径
    // localhost:3000/  端口号后的/是浏览器自动加上的
    // favicon.ico是浏览器的默认请求，收藏夹图标 
    // 2.判断路径处理响应

    var url = req.url;
    // if (url === '/') {
    //     res.end('index page');
    // } else if (url === '/login') {
    //     res.end('login page');
    // } else {
    //     res.end('404 Not Found.')
    // }
    if (url === '/products') {
        var products = [
            {
                name: '苹果 12',
                price: 5499
            },
            {
                name: '1+ 12',
                price: 4999
            },
            {
                name: 'huawei Mate40',
                price: 6999
            }
        ]
        // 相应内容只能是二进制数据或字符串
        // JSON.stringify()方法将数组转换成字符串数组
        // JSON.parse()将字符串转换成对象
        res.end(JSON.stringify(products));

    }
})
server.listen(3000, function () {
    console.log('服务器启动成功，可以访问了');

});