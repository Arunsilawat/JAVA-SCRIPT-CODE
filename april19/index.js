//================================ New Date ==================================
const x= new Date();
const y = new Date("2022-10-20")
const z = new Date(2018,1,28,14,33,18,5);
//const z = new Date(2018,15,35,14,22,18,5);

const a = new Date(2022,6,4,12,30,);
const b = new Date(2022,6,4,12);
const c = new Date(2022,6,4);
const d = new Date(2022,6);
const e = new Date(2022);   //only year pass nhi kar sakte he

const f = new Date("November 24,2018 10:24:50");  //as a string likha 
const g = new Date(1000000000000)                 //miliseconds deke date change kr sakte he
const h = new Date(-1000000000000)

const i = new Date();
const v=i.getDate();
document.getElementById("demo6").innerHTML=i.toString();
document.getElementById("demo6").innerHTML=i.toUTCString();

const q = i.getFullyear();
const u = i.getMonth();
const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octomber",
    "Number",
    "December",
];
console.log(month[0]);
const r=months[i.getMonth()];
document.getElementById("demo7").innerHTML=r;

// new Date(year,month,day,hours,minutes,second,milliseconds)
document.getElementById("demo").innerHTML=x;
document.getElementById("demo2").innerHTML=y;
document.getElementById("demo3").innerHTML=z;
document.getElementById("demo4").innerHTML=a+"<br"+b+"<br>"+c+"<br>"+d+"<br>"+e;
document.getElementById("demo5").innerHTML=f+" <br><br>"+g+" <br><br>"+h;

//========================================================================================================
