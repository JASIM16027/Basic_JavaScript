
let schedule = {};
console.log(isEmpty(schedule)); // true

schedule.morning_shift = "9:00";// false

console.log(isEmpty(schedule));

function isEmpty(schedule){
    for (let key in schedule){
        return false;

    }
    return true;
}
