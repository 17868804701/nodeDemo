/**
 * Created by 黄森 on 2017/6/4.
 */


// define(function (require, module, exports) {
    function convert(input) {
        return parseFloat(input);
    }

    function add(a, b) {
        return convert(a) + convert(b)
    }

    function sub(a, b) {
        return convert(a) - convert(b)
    }

    function mutiply(a, b) {
        return convert(a) * convert(b)
    }

    function divide(a, b) {
        return convert(a) / convert(b)
    }
    //es6自动属性
    module.exports={add,sub,mutiply,divide};

// });
