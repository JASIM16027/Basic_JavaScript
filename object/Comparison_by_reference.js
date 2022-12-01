// primitive value: strings,numbers, booleans ... are always copied as a whole value
let message = "this is a primitive value"
let message1 = message;
let message2 = {};
let message3 = {};
// operands of different types are converted to numbers by the equality operator ==
console.log(message1==message1); 
//A strict equality operator === checks the equality without type conversion.
console.log(message1===message);
console.log(message3==message2,message3===message2);

