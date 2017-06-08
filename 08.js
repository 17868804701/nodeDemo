/**
 * Created by 黄森 on 2017/6/7.
 */
const fs = require('fs');
const path = require('path');

//JSON.stringify({id:10})序列化
//JSON.parse  反序列化
// fs.writeFile(path.join(__dirname,'./test.txt'),JSON.stringify({id:10}),(err)=>{
//     if(err){
//         //读文件是不存在报错
//         //意外错误
//         //文件权限问题
//         //文件夹找不到（不会自动创建文件夹）
//         console.log('error')
//     }else {
//         console.log('success');
//     }
// });


// fs.writeFileSync();
//
//
// var streamWrite = fs.createWriteStream(path.join(__dirname,'./test.txt'));
// setInterval(()=>{
//     streamWrite.write('hello',()=>{
//         console.log('+1')
//     });
// },1000);


fs.appendFile(path.join(__dirname,'./test.txt'),JSON.stringify({id:10}),(err)=>{
    if(err){
        //读文件是不存在报错
        //意外错误
        //文件权限问题
        //文件夹找不到（不会自动创建文件夹）
        console.log('error')
    }else {
        console.log('success');

    }
});






