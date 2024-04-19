// function change(){
//     document.getElementById("demo").value ="indore";
// }

// function display(){

//    let name = prompt("WHAT is ur name ");
//    document.getElementById("myid").innerHTML=name;

// }

// function show(){
//     let name = "Arun";
//     document.getElementById("myshow").innerHTML=name;
//     alert("Arun")
//     console.log(name)
//  }

// document.getElementById("mybtn").addEventListener("click",show);
// function show(){
//     let name = "Arun";
//     document.getElementById("myshow").innerHTML=name;
//     alert("Arun")
//     console.log(name)
//  }


//  document.getElementById("mybtn").addEventListener("click",show);
// function show(){

// let age = 10;
// if (age >=18){
//     alert("you are eligible");
// }
// else{
//     alert("you are not aligible")
// }
// document.getElementById("myshow").innerHTML=age;

// }

// ===================================================

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

