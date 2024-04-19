function display(){
    alert("this is event function");
}

// =================================================================================================

// let mybtn = document.getElementById("btn");
// mybtn.addEventListener("click",()=>{
//     alert("This is another event")
// });

// =================================================================================================


//document.getElementById("btn").addEventListener("click",display1);
// function display1(){
//     alert("this is also an event");
// =================================================================================================

document.getElementById("btn").addEventListener("click",display1);
let mydate = new Date();
function display1(){
    document.getElementById("demo").innerHTML= mydate;
}
// =================================================================================================
