let user ={name:"Jasim Uddin",email:"jasimcse27@gmail.com"};
let permission1 = {canView: true};
let permission2 = {canEdit:true};

//Object.assign(dest, ...sources)
Object.assign(user,permission1,permission2);
for(let property in user){
    console.log(user[property]);
}

Object.assign(user,{name:"Shahid"});
user.canEdit = false;
console.log(user);

// function a(){
//     let name = "Jasim";
//     return `${name}`
// }

// console.log(a());



// object cloning

let clone = Object.assign({},user);
for(let property in clone){
    console.log(clone[property]);
}

// Nested cloning

let student={
    name:"Jasim Uddin",
    email:"jasimcse27@gmail.com",
    books_info:{
       book_name:"machine_learning",
       page:700,
       edition:"17th"
    }
    
}

let book_clone = Object.assign({}, student);
console.log(student==book_clone);
student.books_info.page = 600;
console.log(student.books_info);