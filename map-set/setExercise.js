//------------------example1---------------------------------------
// let number = [1,2,3];
// let set  = new Set(number);
// console.log(set)

// set.add('a');
// set.add('Jasim Uddin');
// set.add(10);
// set.add(20)
// console.log(set);

// let bool = set.delete(10);
// console.log(bool)

// console.log(set)
// for(let val of set){
//     console.log(val)
// }
// // set has 20 or not return true or false
// console.log(set.has(20));

//--------------------------------example2------------------------------------

let set = new Set();
let Jasim = {name:'Jasim Uddin'};
let Karim = {name:'Karim'};
let Rahim = {name:'Abdur Rahim'};
set.add(Jasim);
set.add(Karim);
set.add(Rahim);
set.add(Jasim);
set.add(Jasim);
console.log('set : ',set, 'length : ',set.size);
// iterate over loop..(for...of)
for(let user of set){
    console.log(user.name);
}
console.log('-------------------------------------------------------')
// get the element using for each loop

set.forEach((user)=>{
    console.log(user.name)
});

console.log(set.keys(),set.values());
console.log(set.entries())
let map = new Map(set.entries());
console.log(map)