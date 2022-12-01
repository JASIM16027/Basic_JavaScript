// --------------------example1-----------------------------------
// let map = new Map();

// // map.set(key, value) – stores the value by the key.
// map.set(1,'Jasim');
// map.set(2, 'Karim');
// map.set(3,'sakib');
// map.set(4,'Sifat');
// console.log(map);

// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.

// console.log(map.get(1));
// console.log(map.get(2));
// console.log(map.size);

// map.has(key) – returns true if the key exists, false otherwise.

// console.log(map.has(2));

// map.delete(3);
// console.log(map);
// for(let value of map){
//     console.log(value);
// }

// map.clear() – removes everything from the map.

// console.log(map.clear());
// console.log(map);

// --------------------example2-----------------------------------

// let Jasim = {name:'Jasim Uddin'};
// let karim = {name:'Karim khan'};
// let Rahim = {name:'Abdur Rahim'}
// let objcnt = {};
// objcnt[Jasim] = 1234;
// objcnt[karim] = 234;
// objcnt[Rahim] = 123356;
// console.log(objcnt[Rahim,karim,Jasim]);
// console.log(objcnt);


// --------------------example3-----------------------------------

// Every map.set call returns the map itself, so we can “chain” the calls:

// Iterate over map 

// let map = new Map();
// map.set('1', 'Orange')
//     .set(2,'Grape')
//     .set(3,'Banana')

// for(let key of map.keys()){
//     console.log(key);
// }
// for(let value of map.values()){
//     console.log(value);
// }

// // iterate over [key,value] entries

// for(let entry of map){
//     console.log(entry)
// }

// map.forEach((value,key,map)=>{
//     console.log(`${key} : ${value} ${map}`);
// })



// --------------------example4-----------------------------------

// how to create Map using object, first converted obj to array then array pass into Map constructor 

// let object = {
//     name:'Jasim Uddin',
//     email:'jasimcse27@gmail.com'
// }


// let ar= Object.entries(object);
// console.log(ar[1]);

// let map = new Map(ar);
// console.log(map.get('name'));
// console.log(map);


// //  given array [key,value] pairs, it creates an object from them

// let arr = [
//     ['name','Jasim'],
//     ['email','jasimcse27@gmail.com'],
//     ['university','MBSTU']
// ];
// let obj = Object.fromEntries(arr);

// console.log(obj);


// --------------------example5-----------------------------------

// We can use Object.fromEntries to get a plain object from Map.

// let map = new Map();

// map.set('name','Md.Jasim Uddin');
// map.set('email','jasimcse27@gmail.com');
// map.set('phone','01987476139');
// console.log(map);
// // map convert to object
// let obj = Object.fromEntries(map)
// console.log(obj)

// -------------------------------------------example6------------------------------

// we store the data in a Map, but we need to pass it to a 3rd-party code that expects a plain object.

let map = new Map();
map.set('name','Md.Jasim Uddin');
map.set('email','jasimcse27@gmail.com');
map.set('phone','01987476139');
console.log(map);
//console.log(map.entries())
// let obj = Object.fromEntries(map.entries());
// console.log(obj);

// let obj = Object.fromEntries(map);
// console.log(obj)
console.log(map.keys())

let keys = Array.from(map.keys());

console.log(keys);
keys.push('more');
console.log(keys);

//----------------------------example7----------------------------------------

for(let [key,value] of map){
    console.log(`${key}: ${value}`);
}