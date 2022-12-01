
let message = "'\What you see here is a encrypted message\'";

// trim() remove white space from both side of string

let msg = "           Hello                 ";
console.log(msg.trimStart());
console.log(msg.trimEnd());
console.log(msg);
console.log(msg.trim());
// uppercase lowercase
let textUp = message.toUpperCase(message);
console.log(textUp);
let textlow = message.toLowerCase(message);
console.log(textlow)

// concat() method
let txt = textUp.concat("---"+textlow);
console.log(txt);

// replace() method
let text = message.replace("encrypted","decrypted");
console.log(text);
let newtext = message.replace(/HERE/i,"there");
console.log(newtext);
// substr() method
let prt1 = message.substr(6,7);
console.log(prt1);
let prt2 = message.substr(6);
console.log(prt2);
let prt3 = message.substr(-8);
console.log(prt3);



// substring() method
let part1 = message.substring(1,13);
console.log(part1);


// slice() method

let portion = message.slice(6,13);
console.log(portion);
let portion1 = message.slice(-8);
console.log(portion1);
let portion2 = message.slice(-8,-1);
console.log(portion2);


let len = message.length;
console.log("length is "+ len +". \n"+ "The actualy message is " + message);

let x ="abc";
let y = "abc";
console.log(x==y);
console.log(x===y);
console.log(typeof(x),typeof(y));


let x1=new String("abc");
let y1 = new String("abc");
console.log(x1==y1);
console.log(x1===y1);
console.log(typeof(x1),typeof(y1));

let text1 = "text";
let padding =text1.padStart(6,'k');
console.log(padding);


