/**
 * Created by 黄森 on 2017/6/4.
 */
// 实现命令行计算器
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

let result;
switch (operator) {
    case '+':
        result = parseFloat(parameter1) + parseFloat(parameter2);
        break;
    case '-':
        result = parseFloat(parameter1) - parseFloat(parameter2);
        break;
    case '*':
        result = parseFloat(parameter1) * parseFloat(parameter2);
        break;
    case '/':
        result = parseFloat(parameter1) / parseFloat(parameter2);
        break;
    default:
        throw new Error("不支持的运算符")
}


console.log(result);