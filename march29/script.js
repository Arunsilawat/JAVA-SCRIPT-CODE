document.getElementById("demo").innerHTML="hello world";
document.write("<h2>This is a new headind</h2><p>lorem ism data </p>");

// =======================================================================
let fname = "Arun";
let lname = "silawat";

document.getElementById("demo").innerHTML="hello"+" "+fname+" "+lname+" "+"welcome to script class";

document.getElementById("demo").innerHTML= ` Hello ${fname} ${lname} welcome to js class `;
// =======================================================================
function display(){
    document.getElementById("demo2").style.backgroundColor= "pink";
    document.getElementById("demo2").style.border= "3px solid red";

    document.getElementById("demo2").innerHTML=`
    <table>
    <tr>
    <th>Name</th>
    <th>Course</th>
    <th>City</th>
    </tr>
    <tr>
    <td>john doe</td>
    <td>Java script</td>
    <td>Bhopal</td>
    </tr>
    <tr>
    <td>Brad smith</td>
    <td>react</td>
    <td>Indore</td>
    </tr>
    `
}

// let obj =document.getElementById("pera1")

function display2(){
    document.getElementById("pera").style.backgroundColor="pink";
    document.getElementById("pera").style.color="black";
    document.getElementById("pera").style.border="3px solid black";
    document.getElementById("pera").style.borderRadius="30px";
}

// ======================================================================
