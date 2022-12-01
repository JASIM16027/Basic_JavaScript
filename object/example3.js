let user = function makeUser(name,email,id){
    return{
        // name:name,
        // email:email,
        // id:id,
        name,email,id,
    }
}
let employee = user("Jasim uddin","jasimcse27@gmail.com",16027);
for(let key in employee){
    console.log(key, " : ", employee[key]);
}


console.log(user==employee);
