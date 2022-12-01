// method inside object-------example1---------------
//Functions that are stored in object properties are called “methods”.

// let student = {
//     name:"Jasim Uddin",
//     email:"jasimcse27@gmail.com",
//     phone:"01987476130",
// }

// student.courseInfo = function(){
//     return {
//         courseName:"Computer fundamental",
//         courseTeacher:"Motiur Rahman",
//         classTime:"9:30AM"
//     }
//     }
//     console.log(student);
//    console.log(student.courseInfo());

// method shorthand-------example2-----------------------

// let student = {
//   name: "Jasim Uddin",
//   email: "jasimcse27@gmail.com",
//   phone: "01987476130",
//   courseInfo: function () {
//     return {
//       courseName: "Computer fundamental",
//       courseTeacher: "Motiur Rahman",
//       classTime: "9:30AM",
//     }
//   },
// };
// console.log(student);
// console.log(student.courseInfo());

// method shorthand-------example3-----------------------
// let student = {
//   name: "Jasim Uddin",
//   email: "jasimcse27@gmail.com",
//   phone: "01987476130",
// };

// // first declare function/method

// function courseInfo() {
//   return {
//     courseName: "Computer fundamental",
//     courseTeacher: "Motiur Rahman",
//     classTime: "9:30AM",
//   };
// }
// // then add method
// student.courseInfo = courseInfo;
// console.log(student);
// console.log(student.courseInfo());