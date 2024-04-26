//================================= Map ==========================================
const arr = [1,2,3,4,5];

const alen = arr.length;

const newArray=arr.map(function(x){
    return x*x;
})
console.log(newArray);
//-----for loop---
for(let i=0; i<=alen-1;i++){
    console.log(arr[i]);
}
//============================== Filter =========================================
const arr1=[1,2,3,4,5,6];
const myarray=arr1.filter((item)=>{
    return item%2==0;
});
console.log(myarray);
//=============================== Reduce ========================================
const numbers=[1,2,3,4];
const sum=numbers.reduce(function(result,item){
    return result+item;
},0);
console.log(sum);
//===============================================================================