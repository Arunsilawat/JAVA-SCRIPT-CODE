// =======================If else ===================================

// let marks = prompt("enter number");
// if(marks > 90){
//     console.log("EXCELLENT");
// }
// else if(marks > 60 && marks < 90){
//     console.log("good");
// }
// else{ 
//     console.log("work heard");
// }

// =========================== switch =======================================

// let day;
// const date = new Date();
// console.log(date.getDate());
// switch (new Date().getDay()){
//        case 0:
//         day = "sunday";
//         break;

//         case 1:
//             day = "monday";
//             break;

//         case 2:
//         day = "tuesday";
//         break;

//         case 3:
//         day = "wednesday";
//         break;

//         case 4:
//         day = "thursday";
//         break;

//         case 5:
//         day = "friday";
//         break;

//         case 6:
//         day = "saturday";
//         break;    

//         default:
//             day = "not valid";
//             break;
// } 
// console.log(day);
// document.getElementById('demo').innerHTML=day;

// ================================for loop=========================================
// let text ="";
// for (let i=0;i<=10;i++){
//     console.log(i);
//     text+=i + "<br>";
//     document.getElementById('demo').innerHTML=text;
// }

// ==================================for in ========================================

const person = {
    fname: "Arun",
    lname: "Silawat",
    age: "24",
    city: "Bhopal",
};

let text ="";
for (let x in person){
    text +=person[x] + "<br>";
    document.getElementById("demo").innerHTML=text;
}