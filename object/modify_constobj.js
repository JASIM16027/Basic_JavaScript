
// const user = {
//     name:"Jasim Uddin",
//     email:"jasimcse27@gmail.com",
//     phone:"01987406130",
//     employee_id : 353,
// }
// console.log(user);
// user.phone = "01987476130";
// console.log(user);
// user.name = "Md. Jasim Uddin";
// console.log(user);
// // user = {} will show error

const user ={
    name:"Jasim Uddin",
    email:"jasimcse27@gmail.com"
}

let employee = {};
for(let property in user){
    employee[property] = user[property];
}

console.log(employee);

employee.name = "mamun";
console.log(employee);
// employee.name ="Jasim Uddin";
console.log(user.name);

function sumAll(...args){
    let sum = 0;
    for(let arg of args)sum+=arg;
    return sum;
}

//console.log(sumAll([1,2,3,4,5,6]));
console.log(sumAll(1,2,3,4,5,6));


