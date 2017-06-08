/**
 * Created by 黄森 on 2017/6/4.
 */
'user strict'

const http = require('http');
let count = 0;

const server = http.createServer((req, res) => {
    res.write(`你是第${count++}个访问的`);
    if (count == 12) {
        while (true) {
        }
    }
    res.end();
});

server.listen(2080, (error) => {
    if (error)
        throw error;
    console.log("成功启动服务器，2080端口")
});
