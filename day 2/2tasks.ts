// 1
const programminglangs:string[] = ["javascript","java","python"];
// 2
const student1:[string,number,boolean] = ["manoj",19,true];
// 
enum weekdays {
    day1= "monday",
    day2 ="tuesday",
    day3 ="wednesday",
    day4 ="thrusday",
    day5 ="friday",
}
let day1:weekdays = weekdays.day1;
console.log(day1)
// 4
let hel:(name:string) =>void = (name)=>{
    console.log("welcome "+name)
}
hel("manoj")
