// function capitalizeFirstLETTER(str){
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() +word.slice(1)).join('');
// }
// console.log(capitalizeFirstLETTER("we are cybrom java script student"));

// true false-----------
//write a javascript function to check whethor a string is blank
function isBlank(str){
    return !str.trim();
}
console.log(isBlank(""));
console.log(isBlank(" "));
console.log(isBlank("hello"));
console.log(isBlank("   hello   "));