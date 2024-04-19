const validate=()=>{
    let myname = document.form.name.value;
    let myemail = document.form.email.value;
    let mypass = document.form.pass.value;
    let mypass1 = document.form.pass1.value;

    if (myname==""){
        alert("Enter your name");
        document.form.name.focus();
        return false;
     }
     if (myemail=="" || !myemail.include('@')){
        alert("Enter your email");
        document.form.email.focus();
        return false;
     }
     if (mypass.length <6){
        alert("password should be more than 6 characters");
        document.form.pass.focus();
        return false; 
     }
     if (mypass1.length =pass ){
        alert("password is not same");
        document.form.pass1.focus();
        return false; 
     }
}



