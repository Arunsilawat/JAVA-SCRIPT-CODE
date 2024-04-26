//============================= Spread operator =============================
const array=[12,34,55,565,54];
const array1=[99,56,444,324,4];

const newArray=[...array,...array1];
console.log(newArray);
//-----arr copy or element add karna-------
const arr=[1,2,3];
const arr1=[...arr,4,5,6];
console.log(arr1);
//------element copy-----
const arr3=[1,2,3];
const arr4=[...arr3];
arr3.push(5);
console.log(arr3);
console.log(arr4);
//-----object copy------same propatey ek bar hi aayegi object me
const person ={
    name:"Arun",
    age:"33",
    city:"Bhopal"
}
const person1={
    lastname:"Silawat",
    house_no:"13",
    city:"indore"
}
const newperson={...person,...person1};
console.log(newperson);
//=============================================================================