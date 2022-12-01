
// array method--------------example1-----------------
// let arr = ["I", "wanna", "go","home"];

// //delete arr[1];
// console.log(...arr);
// console.log(arr.length);
// arr.splice(0,0,"simple","word");
// console.log(...arr);
// let rem = arr.splice(0,3);
// console.log(rem);
// console.log(...arr);


// array.slice(start,end);
// let temp = arr.slice(2,4); // return new array coying all items from start index to end(not including end)
// console.log(...temp);
// console.log(...arr.slice(-4));
// console.log(...arr.slice());

// let a = [1,2,3,4];
// let b = [6,7,8,9];
// let c = a.concat(b,[10,100,1000],9,10);
// console.log(c);

// a.splice(-1,0,10,20,40);
// console.log(...a);
// let st = "learning new concept is always fascinating";
// let s = st.split(" ");
// console.log(s);
// console.log(s.join(" "))

//---------------example2---------------------------------

// let  num = [1,2,3,5];
// let arrayLIke={
//     0:"Hello",
//     1:"Jasim",
//     3:"where are you?",
//     //[Symbol.isConcatSpreadable]:true,
//     length:6
// }

// console.log(num.concat(arrayLIke));

//---------------example2---------------------------------

// let  num = [1,2,3,5];
// let arrayLIke={
//     0:"Hello",
//     1:"Jasim",
//     3:"where are you?",
//     [Symbol.isConcatSpreadable]:true,
//     length:6
// }

// console.log(num.concat(arrayLIke));

// --------------------iterate forEach()---example3-------------------

// let st = ["ab","ac","ad"];
// st.forEach((element)=>{
//     console.log(element);
// });

// let st = ["ab","ac","ad"];
// st.forEach((item,index,st)=>{
//     console.log(`${item} is at index ${index} in ${st}`);
// });

