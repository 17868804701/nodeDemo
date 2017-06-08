/**
 * Created by 黄森 on 2017/6/7.
 */
const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

fs.readFile(path.join(__dirname,'./血染的风采.lrc'),(error,data)=>{
    console.log(iconv.decode(data,'GBK'));
    // console.log(data.toString('GBK'));
});
