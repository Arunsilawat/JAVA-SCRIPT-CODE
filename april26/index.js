//================================ charat ===================================
const mypara="Apple,Grapes,Watermelon,apple,apples";
console.log(mypara.charAt(6));
//------ charCodeAt ---------
console.log(mypara.charCodeAt(0));
//==================== split ,converts string to array ======================
let x = mypara.split(",");
console.log(x);
//==================== indexof ,to get the index of any charactor ===========
let x1=mypara.indexOf("Grapes");
console.log(x1);
//======== includes ,element hoga to true dega nhi hoga to false dega =======
let x2=mypara.includes("Apple");
console.log(x2);
//==================== search ,index num search krega =======================
let x3=mypara.search("Grapes");
console.log(x3);
//=== match ,result ko array ke form me dega word ko match krke dega =========
let x4=mypara.match(/Apple/gi);
console.log(x4);
//============================================ string end ========================================================