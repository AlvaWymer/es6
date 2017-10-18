"use strict";

// let a = 1; 
// console.log(a);
// var b = 4;
// {
//     let b = 5;
// }
// console.log(b);
// const c = 1;

// console.log(c);

// let [x,y,z]= [1,2,3];
// console.log("x="+x);
// console.log("y="+y);
// console.log("z="+z);


// let [e,[f,g],h] = [1,[2,3],4];
// console.log("e="+e);
// console.log("f="+f);
// console.log("g="+g);
// console.log("h="+h);


// let [foo=true]=[];
// console.log(foo);

// // 解构
// var {foot,bar} = {foot: 'yanganihua',bar:'杨乃华'};
// console.log(foot+bar);


// let foos;
// ({foos} = {foos:'yang'});
// console.log(foos);


// 拆分字符串
// const [a,b,c,d,e,f] = 'yangnh';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);


//可变参数
// function yang(... args){
//     console.log(args[0]);
//     console.log(args[1]);
//     console.log(args[2]);
// }
// yang(1,2,3);

// 扩展运算符针对于业务的时候
// 将a中的数据复制到b中，并且开辟新的空间
// let arga = [1,2,3];
// let argb = [...arga];
// argb.push(3);
// console.log(arga);
// console.log(argb);

// 可变参数  rest   第一个就是   只是针对剩余的参数个数
function argsArgs(first) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            console.log(val);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    console.log(args.length);
}
argsArgs(0, 1, 2, 3, 4, 5, 6, 7, 8);
