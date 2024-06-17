
document.getElementById("mybtn").addEventListener("click",display);
function display(){

   let age = prompt("What is your age ");
   document.getElementById("myid").innerHTML=age;
   
if (age >=18){
    alert("you are eligible");
}
else{
    alert("you are not aligible")
}

}
// ===================================================================

function validate(){
    let myname = document.f1.name.value;
    let mycity = document.f1.city.value;
    alert(myname+" "+mycity);

    if( myname ==""){
        alert("enter ur name")
        document.f1.name.focus();
        return false;
    }
}


// ====================================================================
function display1(){
    let value= prompt("enter number ");
    document.getElementById("h1").innerHTML=value*value*value;
}