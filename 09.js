/**
 * Created by 黄森 on 2017/6/7.
 */
//打印当前目录所有文件

const fs = require('fs');
const path = require('path');
require('./proto.js');


//获取当前有没有传入目标路径

var target = path.join(__dirname,process.argv[2] || './');

fs.readdir(target,(error,files)=>{
   files.forEach(files=>{
       // console.log(path.join(target,files));
       fs.stat(path.join(target,files),(err,stats)=>{
           console.log(`${stats.mtime.format('yyyy/MM/dd HH:mm')}\t${stats.size}\t${files}`)
       })
   })
});