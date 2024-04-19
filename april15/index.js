//=================for in ======================================
const person ={
    fname : "Arun",
    lname : "Silawat",
    age : "23",
    city : "Bhopal",
};
let text="";
for(let x in person){
    text +=person[x] + "<br>";
    console.log(person[x]);
}
document.getElementById("demo").innerHTML= text;

//======================================== array in =====================================
const arr=[1,2,3,4,5,6,6,7];
let text1 =" ";
for(let x in arr){
    text1+=arr[x] + "<br>";
}
document.getElementById("demo1").innerHTML=text1;

//==================================== for of loop ======================================
const ar=["bmw","mercedes","porche","meuti","nissan"];
let text2 =" ";
for(let x of ar){
    text2+=x + "<br>";
}
document.getElementById("demo2").innerHTML=text2;

//========================================================================================
const name =" Javascript";
let text3 =" ";
for(let x of name){
    text3+=x + "<br>";
}
document.getElementById("demo3").innerHTML=text3;
//==============================while loop===============================================
let text4=" ";
let i=0;
while(i < 10){
    text4+= i + "<br>";
    i++;
    console.log(i);
}
document.getElementById("demo4").innerHTML=text4;
//======================================Do while loop ===================================
let text5=" ";
let i1=0;
do{
    text5 +=i1;
    i1++;
    console.log(i1);
}
while(i1 < 10)
document.getElementById("demo5").innerHTML=text5;