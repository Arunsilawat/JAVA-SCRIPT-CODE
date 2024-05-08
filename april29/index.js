//higher order function :when any function take function or callback 
//argument then it is 
function chalja(){
    setTimeout(loader,3000);
}
const loader = ()=>{
    document.querySelector("#mainweb").style.display= "block";
    document.querySelector("#imgs").style.display= "none";

}