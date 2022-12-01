


// use of this -------example1-----------------------
// To access the object, a method can use the this keyword.

// let student = {
//   name: "Jasim Uddin",
//   email: "jasimcse27@gmail.com",
//   phone: "01987476130",
//   studentInfo() {
//     //console.log(this.name,this.email, this.phone);
//     // here we can use student instead of this
//     return `
//     ${student.name} 
//     ${this.email}
//     ${this.phone}`;
//   },
// };
// console.log(student.studentInfo());
// student.studentInfo();

// let admin = student;
// student = null;
// console.log(admin.studentInfo()); // TypeError: Cannot read property 'name' of null //it's not working because of student.name


// use of this -------example2-----------------------

// let student = {
//     name: "Jasim Uddin",
//     email: "jasimcse27@gmail.com",
//     phone: "01987476130",
//     studentInfo() {
//       //console.log(this.name,this.email, this.phone);
//       return `
//       ${this.name} 
//       ${this.email}
//       ${this.phone}`;
//     },
//   };
//   console.log(student.studentInfo());
//   student.studentInfo();
  
//   let admin = student;
//   student = null;
//   console.log(admin.studentInfo()); // it's working because of using this instead of student 


// use of this -------example3-----------------------

// let user = {name:"Jasim Uddin"};
// let admin = {name:"Admin"};
// function func(){
//     console.log(this.name)
// }

// user.func = func;
// admin.func = func;
// console.log(user);
// console.log(admin);
// admin.func();
// //user.func();
// user['func']();

// use of this--------example4------------------
// calling this without object 

// function sayHello(){
//     "use strict"
//     return this;
// }
// console.log(sayHello())

//Arrow functions have no this
// let user ={
//     fname:"Jasim",
//     lname:"Uddin",
//     fullName(){
//         let getFullName=()=>`${this.fname} ${this.lname}`;
//         return getFullName;
//         //return `${this.fname} ${this.lname}`;
//     }

// }


//   console.log(user.fullName()());

  // use of this---example5-----------

//   function student(){
//     return{
//         fname:"Jasim",
//         lname:"Uddin",
//         ref(){
//             return this;
//         }
//     }
//   }
  
//   let student1 = student();
//   console.log(student1.ref().fname);
  



// arrow function have no this----example6-------------

// let studentInfo = {
//     group:"Science",
//     students:["Jasim","shanto","Torun"],
//     showStudentList(){ // method
//         this.students.forEach(
//         function(student){
//             console.log(this.group+": "+student); // this = undefined, but arrow function doesn't have this. so we can solve this problem using arrow function
//         }
//         );
//     }
// };

// studentInfo.showStudentList();

// arrow function have no this----example7-------------

// let studentInfo = {
//     group:"Science",
//     students:["Jasim","shanto","Torun"],
//     showStudentList(){ // method
//         this.students.forEach(
//         student=>{
//             console.log(this.group+': ' +student); // this==studentInfo
//             //console.log(studentInfo.group+': '+student);
//             console.log(this==studentInfo, this===studentInfo);
//     } // arrow function
//         );
//     }
// };

// studentInfo.showStudentList();
//console.log(studentInfo.group);

//arrow functions can’t be used as constructors. They can’t be called with new.

// function f(){
//     "use strict"
//     return this;
// }

// console.log(f());
let i = -10,len=0;

i = i ? i > 0 ? Math.max(0, len + i) : i : 0;
console.log(i);

if(i){
    i = Math.max(0,len+i)
}
