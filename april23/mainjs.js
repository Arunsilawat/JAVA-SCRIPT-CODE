//====================== Rest parameter =======================
let display = function (...num1){
    console.log(num1);
}
display(3);
display(4,5);
display(6,7,8,9,10);
//---array parameter pass----
let sum = function (x,y,z){
    console.log(x+y+z);
}
const array= [1,2,3,4,5,6];
sum(...array);
//======================Destructuring==========================
const myarray =[1,2,3,4,5,6,7,9];
const [a,,b,c,d]=myarray; //,, skip krne ke lye
const [a1,b2,c3,d4,...num]=myarray; // baki ke bache element printe karega
console.log(a,b,c,d);
console.log(num);
//--object destucturing ---
const person={
    name: "Arun",
    id:"322",
    age:"23",
}
const {name,id,age}=person;
console.log(name,id,age);
//--name deke printe karana ----
const {name:username,id:i,age:myage}=person;
console.log(username,i,myage);
//============================================================