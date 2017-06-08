/**
 * Created by 黄森 on 2017/6/3.
 */
// 引入文件操作fs模块
const fs = require("fs");
console.time('timer');
fs.stat('./list.md', (err, stats) => {
    if (err) {
        console.log("文件不存在");
        fs.writeFile('./list.md', new Date(), (err) => {
            if (err) {
                console.error(err);
                return false
            }
            console.log("文件创建成功")
        });
        return false;
    }
    //存在的话删除
    fs.unlink('./list.md', (err) => {
        if (err) {
            console.error(err);
            return false
        }
        fs.writeFile('./list.md', new Date(), (err) => {
            if (err) {
                console.error(err);
                return false
            }
            console.log("文件删除后创建成功")
        })
    })
});
console.timeEnd('timer');