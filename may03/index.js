const  var1="hello";

//localStorage.clear();
const save = () =>{
    //for store data in localstorage
    window.localStorage.setItem('data',var1)
}
//let sava = localstorage.getItem('data")
//to retrieve data from localstorage;

//localStorage.clearItem("data");

//localStorage.clearAll();
///================================arr========
const arr=[12,44,55,66,77,"gh"]
const save1=()=>{
    window.localStorage.setItem('arr',arr)
    let answer=window.localStorage.setItem(arr)
    console.log(answeer)
}