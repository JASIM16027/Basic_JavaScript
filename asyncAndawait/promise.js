// const hasMeeting = false;
// const meeting = new Promise((resolve,reject)=>{
//     if(!hasMeeting){
//         const meetingDetails = {
//             meetingName:"Technical meeting",
//             meetingTIme:"10:30PM",
//             location:"Google Meet",
//             meetingTopic:"How to write clean code",
//         };

//         resolve(meetingDetails);
//     }
//     else{
//         reject(new Error("meeting already scheduled!"));
//     }
// });

// // const addTOCalendar = (meetingDetails)=>{
// //     return new Promise((resolve,reject)=>{
// //         const calendar = `${meetingDetails.meetingHostName} has been scheduled on ${meetingDetails.location}
// //         at ${meetingDetails.meetingTIme}`;
// //         resolve(calendar);
// //     });
// // }

// const addTOCalendar = (meetingDetails)=>{

//         const calendar = `${meetingDetails.meetingName} has been scheduled on ${meetingDetails.location} at ${meetingDetails.meetingTIme}`;
//         return Promise.resolve(calendar);

// }
// meeting
//     .then(addTOCalendar)
//     .then((res)=>{
//         console.log(JSON.stringify(res));
//     })
//     .catch((err)=>{
//         console.log(err.message)
//     })

//     console.log(`hello`);

//-------------------promise() example2---------------------------------

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(`Promise1 resolved`);
//     },3000);
// });

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(`Promise2 resolved`);
//     },2000);
// });
// // promise1.then((res)=>console.log(res));
// // promise2.then((res)=>console.log(res));
// // Promise.all([promise1,promise2])
// //                         .then((res)=>{
// //                             console.log(res);
// //                         });
// Promise.race([promise1,promise2]).then((res)=>{
//     console.log(res);
// });

///--------------------promise example3----------------------------------

// const value = false;
//  let promise = new Promise(function(resolve,reject){
//     if(!value){
//         //resolve("done");

//         setTimeout(()=>resolve("food is being processed"),2000);
//         resolve("done")
//         console.log("resolve will call only one")
//     }
//     else{
//         reject(new Error("Error has been found"));

//     }

// });

// promise.then(
//     function(res){console.log(res)},
// ).catch(function(err){console.log(err.message)})

//--------------------promise example4----------------------------------
// let flag = true;

// let promise = new Promise((resolve,reject)=>{

//     if(!flag){
//         setTimeout(()=>resolve("done"),3000);
//     }
//     else{
//         reject(new Error("error"));
//     }
// });

// promise.then(
//     (res)=>console.log(res),

// ).catch((err)=>{console.log(err.message)});

//--------------------promise example5----------------------------------
// let flag = true;

// let promise = new Promise((resolve,reject)=>{
//     //setTimeout(()=>resolve("done"),3000);

//         setTimeout(()=>reject(new Error("error")),3000);
//     });
// //promise.catch((err)=>console.log(err.message));
// promise.finally(()=>
//     console.log("promise ready"))

//     .then(null,(err)=>console.log(err.message));

//--------------------promise example6 use of final() block- example6---------------------------------

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve("value"), 2000);
//   })
//     .finally(() => console.log("Promise ready")) // triggers first
//     .then(result => console.log(result));

// new Promise((resolve,reject)=>{
//     throw new Error("error");
// })

// .finally(()=>console.log("program has been closed"))
// .catch((err)=>console.log(err.message));

//------------------------------------------promise() chaining----example7-----------------------
// let flag = false;

// new Promise((resolve, reject) => {
//   if (!flag) {
//     setTimeout(() => resolve(1), 2000);
//   } else {
//     reject(new Error("error"));
//   }
// })

//   .then((res) => {
//     console.log(res);
//     return res * 2;
//   })

//   .then((res) => {
//     console.log(res);
//     return res * 2;
//   })

//   .then((res) => {
//     console.log(res);
//     return res * 2;
//   })
//   .then((res)=>console.log(res))

//   .catch((err) => console.log(err.message))

//   .finally(() => console.log("program has been closed"));


//-------------------------Returning promises----example8---------------------------------


// let flag = false;

// new Promise((resolve, reject) => {
//   if (!flag) {
//     setTimeout(() => resolve(1), 2000);
//   } else {
//     reject(new Error("error"));
//   }
// })

//   .then((res) => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//         if (!flag) {
//           setTimeout(() => resolve(res*2), 2000);
//         } else {
//           reject(new Error("error"));
//         }
//       })
//   })

//   .then((res) => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//         if (!flag) {
//           setTimeout(() => resolve(res*2), 2000);
//         } else {
//           reject(new Error("error"));
//         }
//       })
//   })

//   .then((res) => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//         if (!flag) {
//           setTimeout(() => resolve(res*2), 2000);
//         } else {
//           reject(new Error("error"));
//         }
//       })
//   })
//   .then((res)=>console.log(res))

//   .catch((err) => console.log(err.message))

//   .finally(() => console.log("program has been closed"));

//---------------------example9--loadScript--------------------------------------

