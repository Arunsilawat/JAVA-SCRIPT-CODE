const mypara=" This is a string of name like Rahul,arun,pragya,mohit and rahul is a good friend of jalaj ";
//================================ Length ==============================
console.log(mypara.length);
//================================ Slice ===============================
let x = mypara.slice(7,30);    //string cut kar lega 
x1=mypara.slice(7);
x2=mypara.slice(-12,-1);
console.log(x);
console.log(x1);
console.log(x2);
//=============================== substring ===========================
x3= mypara.substring(7,30)
x4= mypara.substring(7)

console.log(x3);  //note - isme ham (-)me value nhi de sakte he
console.log(x4);
//=============================== replace =============================
x5 = mypara.replace("rahul","Arun");
x6 = mypara.replaceAll("rahul","Arun");
console.log(x5); 
console.log(x6); 
//----- capital word ke liye  /rahul/gi replace with regular expression me likhenge ----
x7 = mypara.replaceAll(/rahul/gi,"Arun");
console.log(x7); 
//=============================== toUpperCase =============================
const name= "john doe";
console.log(name.toUpperCase());
//=============================== toLowerCase =============================
const name1= "JAVASCRIPT";
console.log(name1.toLowerCase());
//=============================== concat ==================================
const newstring= name +" "+name1;
const newstring1= `${name} ${name1}`;  // teno me output same aagega
const newstring2= name.concat(" ",name1);
console.log(newstring); 
console.log(newstring1); 
console.log(newstring2); 
//========================================================================

