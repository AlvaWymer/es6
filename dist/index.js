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
function yang() {
    console.log(arguments.length <= 0 ? undefined : arguments[0]);
    console.log(arguments.length <= 1 ? undefined : arguments[1]);
    console.log(arguments.length <= 2 ? undefined : arguments[2]);
}
yang(1, 2, 3);
