//---------------------example1-----------------------
// const arr = [1,2,3,4];

// const temp = arr.map(function(item,index,array){
//     return item*10<40;
// });

// console.log(temp)
// const mp = arr.map(x=>x**3);
// console.log(...mp)
// let res = arr.map(item=>item*2<3);
// console.log(...res);

//--------------------example2-----------------------

// const fruits = ['Orange','Apple','Grape'];
// let lengths = fruits.map(item=>item.length);
// console.log(...lengths)

//--------------------example3------------------------
//The items are sorted as strings by default.
// function compareNumeric(a,b){
//     if(a>b) return 1;
//     if(a==b)return 0;
//     if(a<b) return -1;
// }
// let a =[1,7,3,15,4];
// a.sort(compareNumeric);
// console.log(a)//[1, 15, 3, 4, 7]

//------------comparison function for short------------------
//  let arr = [1,2,15,20,17];
// // arr.sort(function(a,b){return a-b;});
// // console.log(...arr); 
// arr.sort((a,b)=>a-b);
// console.log(...arr); 

//-----------localeCompare for strings------------------------

// let st = ["abir","tipu","kiron","robi"];

// st.sort((a,b)=>a>b?1:-1);
// console.log(st);

// st.sort((a,b)=>a.localeCompare(b));
// console.log(st);

//-------------------------sorted in reverse order ----------


// let arr = [1,2,15,20,17];
// arr.sort((a,b)=>a<b?1:-1);
// console.log(arr)

//---------split(delimiter)---------join()----------
let st = "I would like to know some leading software company";
//let delimiter = ' ';
let a  = st.split(' ');
console.log(a);
console.log(a.join(' '));
 for(let word of a){
    //console.log(`${word}`);
    console.log(word);
 }

 



