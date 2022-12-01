
// var point = {
//     x:20,
//     y:30
// }

// function a(point){
//     point.x = 100;
//     point.y = 200;

//     console.log(point.x,point.y);

// }

// a(point);

// console.log(point.x,point.y)
// var n =10;

// // pure function--there will be no side effect of variable
// function square(n){
//     return n*n;
// }

// console.log(square(n));


function sample(a,b){
    var c  = a + b;
    return c;
}

// function can be stored in a variable
var fun = sample;
console.log(fun(4,5));


// function can be stored in an array

var arr = [];
arr.push(fun);
console.log(arr[0](10,20));

// function can be stored in an object

var obj = {
    sum: fun
}

console.log(obj.sum(100,200));

// let twiceNumber = (num)=>num*2;
// console.log(twiceNumber(20));

var x = 10;
function a(){
    var y = 20;
   return function(){
        console.log(y);
    }
}

var res = a();
res();

