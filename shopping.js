function validate() {
return (validateFirstname() && 
    validateLastname() && 
    validateAddress1() && 
    validateAddress2() && 
    validatezip() &&  
    validatephone());


    function validateFirstname() {
        let username = document.getElementById("userid").value;
        let regx = /^[a-zA-Z]{2,100}$/;
        if (regx.test(username)) {
            document.getElementById("userid").style.border = "3px solid green";
            return true;
        } else {
            document.getElementById("userid").style.border = "3px solid red";
            return false;
        }
    }

    function validateLastname() {
        //lastname
        let lastname = document.getElementById("lastid").value;
        let lastn = /^[a-zA-Z]{2,100}$/;
        if (lastn.test(lastname)) {
            document.getElementById("lastid").style.border = "3px solid green";
            return true;
        } else {
            document.getElementById("lastid").style.border = "3px solid red";
            return false;
        }
    }
    //
    function validateAddress1() {
        //address 1
        let add = document.getElementById("address1").value;
        let regadd = /^[a-zA-Z0-9\.-]{10,100}$/;
        if (regadd.test(add)) {
            document.getElementById("address1").style.border = "3px solid green";
            return true;
        } else {
            document.getElementById("address1").style.border = "3px solid red";
            return false;
        }
    }

    function validateAddress2() {
        //address 2
        let addtwo = document.getElementById("address2").value;
        let regaddtwo = /^[a-zA-Z0-9\.-]{10,100}$/;
        if (regaddtwo.test(addtwo)) {
            document.getElementById("address2").style.border = "3px solid green";
            return true;
        } else {
            document.getElementById("address2").style.border = "3px solid red";
            return false;
        }
    }

    //

    //zip code
    function validatezip() {
        let zipcode = document.getElementById("pincode").value;
        let regpin = /^[0-9]{5,6}$/;
        if (regpin.test(zipcode)) {
            document.getElementById("pincode").style.border = "3px solid green";
            return true;
        } else {
            document.getElementById("pincode").style.border = "3px solid red";
            return false;
        }
    }

function validatephone(){
    let phone=document.getElementById("mobno").value;
    let regphone=/^([7-9])([0-9]){9}$/;
    if (regphone.test(phone)) {
        document.getElementById("mobno").style.border = "3px solid green";
        return true;
    } else {
        document.getElementById("mobno").style.border = "3px solid red";
        return false;
    }
}




































































}