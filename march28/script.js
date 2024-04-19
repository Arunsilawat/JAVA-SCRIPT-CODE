function display(){
    alert("hello Arun");
}

let x = document.getElementById("mybtn");
x.addEventListener('click',function(){
    alert("This is an addEventlistener event");
});


x.addEventListener("mousemove",myfunction);

function myfunction(){
    document.getElementById("demo").innerHTML =Math.random();
}

// =============================================================



function result(){
    let y = document.getElementById("myinput").value;
    document.getElementById("demo").innerHTML =y; 
}
document.getElementById("myinput").addEventListener("change",result);


