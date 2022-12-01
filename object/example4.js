let obj = {
    "2":"two",
    "0":"zero",
    "1":"one",
   
};
for(let code in obj){
    console.log(+code);
}

console.log(Math.trunc(Number("+49")));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    kaith:"Thirty thousand",
  }

  for(let salary in salaries){
    if (typeof salaries[salary]=="number"){
        salaries[salary]*=2;
    }
   
  }

  console.log(salaries);


//   let salary_sum=0;
//   for(let salary in salaries){
//     salary_sum+=salaries[salary];
//   }

//   console.log(salary_sum);
