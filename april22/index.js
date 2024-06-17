const array1= [];
array1[0]="john";
array1[1]="deo";
array1[2]="23";
console.log(array1);

//================================= array me loop ==========================================

const fruits =['Banana','Apple','Chikoo','Kiwi','Mango'];
// fruits.pop();
let flen = fruits.length;
console.log(flen);
let text = '<ul>';
for(let i=0;i<flen; i++){
    text +="<li>"+fruits[i]+"</li>";
}
text+="</ul>";
document.getElementById("demo").innerHTML=text;
//==================== Element ko add karna ====================
let x = fruits.push("Watermelon");
console.log(x);
console.log(fruits);
//==================== Element ko remove karna =================
let x1 = fruits.pop();
console.log(x1);
console.log(fruits);
//==================== Element ko shift karna ==================
fruits.shift();
console.log(fruits);
//==================== Element ko start me add karna ===========
fruits.unshift("Papaya");
console.log(fruits);
//==================== Element sort karna ======================
fruits.sort();
console.log(fruits);
//=================== string print karna  =====================
console.log(Array.isArray(fruits));  // true ya false dega
console.log(typeof Array);           // typeof se type pata karna 
let a =fruits.toString();
document.getElementById("demo").innerHTML=a;
document.getElementById("demo").innerHTML=fruits.join("*");  //join method 

console.log(typeof a);
//====== beech me se Element ko hata kar dusra element add karna =====
let b = fruits.splice(2,2,"Grape", "Apricot");
console.log(b);
console.log(fruits);
//======= array se element ko cut kar ke new array bana dega ======
let c = fruits.slice(3);
console.log(c);
console.log(fruits);
//====================  Array ko ek sath jodna ====================
const veggies =[ "okra","carrot","Cabbage","chilly"];
const newArray = fruits.concat(veggies);
console.log(newArray);

//==========================compaire function number ko badte kram me likhna ============================
const array2 = [13,45,100,23,50,500];
array2.sort(function (a,b){
    return a-b;
});
console.log(array2);

const array3 = [13,45,100,23,50,500];
array2.sort(function (a,b){
    return b-a;
});
console.log(array3);
//================= reverse array =====================

console.log(array3);
array3.reverse();
console.log(array3);