// setTimeout(function(){
//     console.log("timer");
// },1000);
// function a(b){
//     console.log("a");
//     b();
// }
// a(function b(){
//     console.log("b");

// })

//callback function
// function sample(a,b,cb){
//     var c = a+b;
//     var d = a-b;
//     var result = cb(c,d);
//     return result;

// }

// function sum(a,b){
//     return a+b;
// }

// var sum = sample(8,4,sum);
// console.log(sum);

// var sub = sample(8,4,function(c,d){
//     return c-d;
// })

// console.log(sub);

// var multiplication = sample(8,4,function(c,d){
//     return c*d;
// })
// console.log(multiplication);

// var p = function person(name,email){
//     return{
//         name:name,
//         email:email
//     }
// }

// var person1 = p;

// console.log(person1("Jasim","jasimcse27@gmail.com"));
// console.log(p("Jasim","jasimcse27@gmail.com"));

function a() {
  console.log("a");

  function b() {
    console.log("b");

    function c() {
      console.log("c");
    }
    return c;
  }

  return b;
}

a()();
