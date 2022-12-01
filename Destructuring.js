//Array destructuring 
// let arr = ["Jasim","Uddin"];
// let [firstName,surName] = arr;
// // let firstName = arr[0];
// // let surName = arr[1]
// console.log(firstName,surName);

// let number = [1,2,3,4,5,6];
// let [a, ,b,,c] = number; // ignore element using comma

// console.log(a,b,c);

// let user = {};
// //[user.firstName,user.surName, user.email] = 'Jasim Uddin jasimcse27@gmail.com'.split(' ');
// [user.firstName,user.surName, user.email] = 'Jasim Uddin jasimcse27@gmail.com'.split(' ');
// user.user_detail = [user.firstName,user.surName, user.email].join(' ');
// console.log(user)

// console.log(user.email)

// console.log('.....................................user information.............................................')

// for(let [key,value] of Object.entries(user)){
//     console.log(`${key} : ${value}`);
// }

// ...................................swap variables values trick--------------------------------------------

let a = 10;
let b = 30;
[a,b] = [b,a];
console.log(a,b);


//...................................example..................................................................

let number = [1,2,3,4,5,6,7,8,9];
[number1,number2,number3,...restNumber] = number;
console.log(...restNumber)

//---------------------default values-------------------------------------------------------------------------

let [firstName='Guest',surName='anonymous']=['Jasim'];
console.log(firstName,surName);

//------------------------Object destructuring---example1-------------------------------------------------------------

let user = {
    name:'Jasim Uddin',
    email:'jasimcse27@gmail.com',
    uni:'MBSTU',
    subject:['CS','math','physics']
}

function display({
    name='anonymouse',
    email='email@gmail.com',
    uni: university='mbstu',
    subject=[]

}){
    console.log(`${name}, ${email}, ${university}, ${subject[0]},${subject[1]},${subject[2]}`)
}

display(user);

//The order does not matter. 
// let {uni,email,name} = user;
// uni->university
// let {email,name,uni:university} = user;
// console.log(name,email,university);

// let {name,...rest} = user;
// console.log(name);
// console.log(rest.email,user.uni);

// let {name,email,uni:university,subject:[subject1,subject2,subject3]} = user;
// console.log(subject1,subject2,subject3)

//------------------------Object destructuring---example1-------------------------------------------------------------


