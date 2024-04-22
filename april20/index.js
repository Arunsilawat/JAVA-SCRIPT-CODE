const x =new Date();
const d = x.getDate();
const a = x.getDay();
const b = x.getHours();
const c = x.getMinutes();
const e = x.getMilliseconds();
const f = x.getSeconds();

document.getElementById("demo").innerHTML=`${d} ${a} ${b} ${c} ${e} ${f}`;
//================================== Array object =======================================
const myarray = ["bmw","Fort","Nissan","Kia","Tata"];

console.log(myarray); //full array access
console.log(myarray[0]);
console.log(myarray[1]);
console.log(myarray[2]);
console.log(myarray[3]);
console.log(myarray[4]);

const newArray = new Array(34,44,54,33,34);
console.log(newArray);

//==================================== mixed Array  =========================================
const display = ()=>{
    console.log('Hello');
}
const array1 = ['john',34,{name: "sanjana", age: 23}, display];

console.log(array1);
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2].name);
console.log(array1[3]);

const array2 = [
    {
        id:0,
        course:'react',
        price:34000
    },
    {
        id:1,
        course:'python',
        price:35000
    },
    {
        id:3,
        course:'javascript',
        price:20000
    },
]
console.log(array2)

//======================== length find =======================
const fruits = ['Banana',"Apple","watermelon","grapes","Mango"];
const z =  fruits.length;
console.log(z);

let fruit = fruits[0];  //first element get 
let fruit1 = fruits[fruits.length-1];  //last element get
console.log(fruit);
console.log(fruit1);

