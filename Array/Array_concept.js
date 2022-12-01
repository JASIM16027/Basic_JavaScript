const fruits = ["Kiwi","Apple","Banana","orange","Pineapple"];
// for(let val of fruits){
//     console.log(val);
// }

// console.log(...fruits);
// //console.log(fruits.toString);
// const arr = [];
// fruits.forEach(function(element){
//     arr.push(element);
// });
// console.log(...arr);
// console.log(arr.sort());

// // Array.forEach() function
// const numbers = [1,2,3,4,5];
// let sum = 0 ;
// numbers.forEach(add);

// function add(value)
// {
//     sum+=value;
// }
// console.log(sum);


// const number = new Array(40,50);
// console.log(number.length);
// console.log(Array.isArray(number));


var ar =[1,2,3,4];
// push(), pop()--for stack
// ar.push(40,100,200);
// ar.pop();

// shift(), unshift() --for queue

// add beginning of the array
ar.unshift(20,300,400,500);
console.log(...ar)
// delete from beginning of the array
ar.shift()
console.log(...ar);

// using splice, we insert, delete and update multiple data 
// ar.splice(3,0,30,50,60);clear

// console.log(...ar);


// var b = [];
// b[1000] = 20;
// b.push(30);
// console.log(b);//[ <1000 empty items>, 20, 30 ]
let number = [1,2,3,4,5,6];
let number1 = [1,2,3,4,5,6];
let number2 = number1;
console.log()
console.log(number1==number2);
//console.log(number[0]==number1[0]);
console.log(String(number)==number.toString());
console.log(number.toString(),String(number));
