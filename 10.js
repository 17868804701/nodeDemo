/**
 * Created by 黄森 on 2017/6/7.
 */
//递归打印目录树

const fs = require('fs');
const path = require('path');

// 获取当前有没有传入目标路径
var target = path.join(__dirname, process.argv[2] || './');

function load(target, depth) {
    // depth  0 = ''
    // depth  1 = '│ '
    // depth  2 = '│ │ '
    var prefix = new Array(depth + 1).join('│ ');

    var dirinfos = fs.readdirSync(target);

    var dirs = [];
    var files = [];

    dirinfos.forEach(info=> {
        var stats = fs.statSync(path.join(target, info));
        if (stats.isFile()) {
            files.push(info);
        } else {
            dirs.push(info);
        }
    });

    dirs.forEach(dir=> {
        console.log(`${prefix}├─${dir}`); // node_modules
        // 当前是一个目录 需要深入进去
        load(path.join(target, dir), depth + 1);
    });

    var count = files.length - 1;
    files.forEach(file=> {
        var temp = count-- ? '├' : '└';
        console.log(`${prefix}${temp}─${file}`);
    });
}


load(target, 0);