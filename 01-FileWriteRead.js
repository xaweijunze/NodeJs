// 读取文件
var fs = require('fs');

// 写文件
// 第一个参数文件路径
// 第二个参数文件内容
// 第三个参数回调函数

// 成功：文件写入成功 error是null
// 失败文件写入失败 error是错误对象

fs.writeFile('./你 好.md', '大家好是我Node.js', function (error) {
    if (error) {
        console.log('写入文件失败');

    }
});
// 读取文件
//     第一个参数就是要读取得文件路径
//     第二个参数是一个回调函数
// 读取成功的话 data是数据 error是null
// 读取失败的话 data是null error是错误对象


fs.readFile('./你 好.md', function (error, data) {
    if (error) {
        console.log('读取文件失败');

    } else {
        console.log(data.toString());

    }
});
