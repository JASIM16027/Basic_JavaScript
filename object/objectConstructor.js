// the main purpose of constructors – to implement reusable object creation code.
// ---------------------example1---------------------------
// function User(name, email){
//     // this={}; // empty object is created and assign to this(implicitly)

//     // add properties to this(object)
//     this.name = name;
//     this.email = email;
//     this.isAdmin = true;
//     // return this; (implicitly)
// }

// let user1 = new User("Jasim Uddin","jasimcse27@gmail.com");
// // user1 same as below user is a  literal object
// // let user ={
// //     name:"Jasim Uddin",
// //     email:"jasimcse27@gmail.com",
// //     isAdmin:true,
// // }
// console.log(user1);
// let user2 = new User("Md.Sifat Hasan","shifatcse20@gmail.com");
// console.log(user2);

// ---------------------------object constructor example2----------------------------
// function User(){
//     console.log(new.target);
// }

// User(); // called regular mode
// new User();// called constructor mode

// ---------------------------object constructor example3----------------------------

// function User(name){
//     if(!new.target){
//         return new User(name);
//     }
//     this.name = name;
// }

// console.log(User("Jasim").name); // called regular mode

// ---------------------------return from constructor----------------------------------

// function MakeUser(){
//     this.name = "Jasim";
//     this.email ="jasimcse27@gmail.com";
//     return;

// }

// console.log(new MakeUser());

// methods in constructor

// function User(greeting,name) {
//   this.name = name;
//   this.greeting = greeting;
//   this.hello = function () {
//     console.log(this.greeting +"  "+ this.name);
//   };
// }

// new User("hi","Jasim uddin").hello();
// let obj = {}

// function A(){return obj };
// function B(){return obj};
// let a = new A();
// let b = new B();
// console.log(a==b);


function Calculator(a,b){
    this.read = function(){
        this.a = a;
        this.b = b;
    }

    this.sum = function(){
        return this.a+this.b;
    }

    this.multiplication = function(){
        return this.a *this.b;
    }

    this.subtraction = function(){
        return  this.a-this.b;
    }
    this.division = function(){
        return this.a/this.b;
    }

}

let calculator = new Calculator(20,100);
calculator.read();
console.log(calculator.sum(), calculator.multiplication(),calculator.subtraction(),calculator.division());

// callback function

// let cal = function(a,b,cb){
//     return cb(a,b);
// }

// let sum = cal(10,20,function(a,b){
//     return a+b;
// })

// console.log(sum);

// let sub = cal(10,20,function(a,b){
//     return a-b;
// })

// console.log(sub);

// let mul = cal(10,20,function(a,b){
//     return a*b;
// })

// console.log(mul);


// let div = cal(10,20,function(a,b){
//     return a*b;
// })

// console.log(div);

function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value+=startingValue;
    }
    

}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
accumulator.read();
console.log(accumulator.value);
