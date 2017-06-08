/**
 * Created by 黄森 on 2017/6/6.
 */

const path = require('path');
//path.join   拼合路径
 const  temp = path.join(__dirname,'../血染的风采.lrc');

 //获取文件名
 console.log(path.basename(temp));

 //获取不同操作系统中路径分隔符，windows路径分隔符是分号
 console.log(path.delimiter);

 //node中获取环境变量
 console.log(process.env.PATH.split(path.delimiter));
 //获取目录名称

 console.log(path.dirname(temp));

 // 获取路径中扩展名，包含点
console.log(path.extname(temp));

//将一个字符串路径转化为一个对象（包含文件目录，文件名，扩展名）
var obj = path.parse(temp);
console.log(obj);

// 将路径转化为字符串

var obj = path.parse(temp);
console.log(path.format(obj));

//判断改路径是否为绝对路径
console.log(path.isAbsolute(temp));
console.log(path.isAbsolute('../temp/1.txt'));

//常规化一个路径
var a = path.normalize('C:/dev\\abc//cba////1.txt');
console.log(a);

// 获取to相对于from的相对路径
//path.relative(from,to);

//获取当前操作系统中默认用的路径分隔符，windows为‘\’
console.log(path.sep);

//允许在任意操作系统上使用windows的方式操作路径
//path.win32

//允许在任意操作系统上使用linux的方式操作路径
//path.posix






