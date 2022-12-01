let text = "Every living life will be die today or tomorrow. living life is too short in this universe";
// let text_split  = text.split(" ");
// console.log(text_split);

// for(let i=0;i<text_split.length;i++){
//     console.log(text_split[i]);
// }
// console.log("\n");
// for(let ind in text_split){
//     console.log(text_split[ind]);
// }



// for(let val of text_split){
//     console.log(val);
// }


// // String search method
// let firstOccurrenceIndex = text.indexOf("living"); 
// console.log(firstOccurrenceIndex);
// let lastOccurrenceIndex = text.lastIndexOf("living");
// console.log(lastOccurrenceIndex);
// console.log(text.indexOf("life", 40));
// console.log(text.lastIndexOf("life",40));

// // console.not found return -1
// let notfound = text.indexOf("least");
// console.log(notfound);


// console.log(text.search("life"));
// console.log(text.search(/life/))

// console.log(text.match("life"));
// console.log(text.match(/life/));
// const match_string_g = text.match(/life/g);
// console.log(match_string_g, match_string_g.length);
// const match_string_gi= text.match(/life/gi)
// console.log(match_string_gi,match_string_gi.length);

const matchAll_string = text.matchAll(/life/gi);
console.log(Array.from(matchAll_string),matchAll_string.length);




