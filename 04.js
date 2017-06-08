/**
 * Created by 黄森 on 2017/6/4.
 */
// 实现命令行计算器,抽象模块
//1、接受参数
const args = process.argv.slice(2);//['node执行程序所在路径'，'当前脚本所在路径'，..]

//2、分析参数
if (args.length !== 3) {
    console.log('参数不合法');
    throw new Error('参数不合法')
}
let parameter1 = args[0];
let operator = args[1];
let parameter2 = args[2];

//3 进行运算
//let result = eval(`${parameter1} ${operator} ${parameter2}`);

const calc  = require('./module/calculator');
let result;
switch (operator) {
    case '+':
        result = calc.add(parameter1,parameter2);
        break;
    case '-':
        result = calc.sub(parameter1,parameter2);;
        break;
    case '*':
        result = calc.mutiply(parameter1,parameter2);;
        break;
    case '/':
        result = calc.divide(parameter1,parameter2);;
        break;
    default:
        throw new Error("不支持的运算符")
}


console.log(result);