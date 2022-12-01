// Searching in array-- example4-----------------------------------------

// when we need to find exact index then we use method indexOf()
// let arr = [1,2,3,false,true];
// console.log(arr.indexOf(1));
// console.log(arr.indexOf(false))
// console.log(arr.lastIndexOf(false))
// // if items exist in array or not then we can use includes includes()
// console.log(arr.includes(false))

// indexOf() and lastIndexOf() are almost do similar task but indexOf find index left to right
// lastIndexOf() find index from right to left

// let fruits = ['Apple', 'Orange', 'Apple','Orange'];
// console.log(fruits.indexOf('Apple'));
// console.log(fruits.lastIndexOf('Apple'));
// console.log(fruits.indexOf('Orange'));
// console.log(fruits.lastIndexOf('Orange'));

// find and findIndex/findLastIndex--------example5----------------

// let studentInfo = [
//     {id:1, name:"Jasim Uddin", email:"jasimcse27@gmail.com"},
//     {id:5, name:"hasif", email:"hasifcse@gmail.com"},
//     {id:3, name:"nafis", email:"nafis@gmail.com"},
// ]

// let student1 = studentInfo.find(item=>item.id==1);
// let student2 = studentInfo.find(item=>item.id==2)
// console.log(student1);
// console.log(student2)
// console.log(studentInfo.findIndex(student1=>student1.name=="hasif"))

// using filter() method---------------------------------------

let studentInfo = [
    {id:1, name:"Jasim Uddin", email:"jasimcse27@gmail.com"},
    {id:5, name:"hasif", email:"hasifcse@gmail.com"},
    {id:3, name:"nafis", email:"nafis@gmail.com"},
]


let someStudent = studentInfo.filter(item=>item.id<10);
console.log(...someStudent);
console.log(someStudent.length)

let students = studentInfo.filter(function(item){
    return item;
});
console.log(...students)

