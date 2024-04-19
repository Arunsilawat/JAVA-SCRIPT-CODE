// const validate=()=>{
//     let myname = document.form1.name.value;
//     let myemail = document.form1.email.value;
//     let myadd = document.form1.add.value;
//     let mypass = document.form1.pass.value;
//  if (myname==""){
//     alert("Enter your name");
//     document.form1.name.focus();
//     return false;
//  }
//  if (myemail=="" || !myemail.include('@')){
//     alert("Enter your email");
//     document.form1.email.focus();
//     return false;
//  }
//  if (myadd==""){
//     alert("Enter your address");
//     document.form1.add.focus();
//     return false;
//  }
//  if (mypass.length <6 ){
//     alert("password should be more than 6 characters");
//     document.form1.pass.focus();
//     return false;
//  }
// };


const validate1=()=>{
    let myname = document.form2.name.value;
    let mypass =document.form2.pass.value;
    let mypass1 =document.form2.pass.value;
    if(myname==""){
        alert("Enter your name ");
        document.form2.name.focus();
             return false;
    }
    if (mypass.length <6 ){
            alert("password should be more than 6 characters");
            document.form2.pass.focus();
            return false;
         
    }
    if (mypass1.length <6 ){
      alert("password should be more than 6 characters");
      document.form2.pass1.focus();
      return false;
   
}
}