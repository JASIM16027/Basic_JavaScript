const  student = {
    fname:"Nafis",
    lname:"shariar",
    college:"Dhaka college",
    person_information: function(){
        return this.fname+" "+this.lname + " "+this.college;
    }
    
};
student.session = "2015-16";
student.batch = "13th";
// console.log(student.person_information());
// console.log(student)
// const male = student;
// console.log(male.person_information);
// male.id = 16060;
// console.log(student['fname']);
//delete student["college"];
delete student["person_information"];

for(let x  in student){
    console.log(student[x]);
    
}
