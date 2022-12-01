let groceries_price ={
    vegetable:300,
    fish:1000,
    meat:1400,
    onion:100,
    ginger:50,

}
let sum = 0;

for(let price in groceries_price){
    sum+=groceries_price[price];
}
console.log(sum);

