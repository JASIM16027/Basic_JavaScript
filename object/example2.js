// delete does not effect on variable
// let a = 10;
// delete a;

// console.log(a); // output 10

let fruit = "apple";
let bag ={
    [fruit]:20,
}
console.log(bag);


let user = function makeUser(name, email) {
  return {
    name: name,
    email: email,
  };
};
let user1 = user("jasim", "jasimcse27@gmail.com");
console.log(user1);
