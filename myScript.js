//something.js

function printError(id, message) {
    var name = document.getElementById(id);
    name.innerHTML = message;
}

function validateField(field, fieldErr, regex) {
    var f = document.getElementsByName(field);
    //console.log(field);

    if (f[0].value === "") {
        printError(fieldErr, "Error: Empty " + field + ".");
        //alert("false");
        return false;
    }
    else if (regex.test(f[0].value) == false) {
        printError(fieldErr, "Error: Invalid " + field + ".");
        //alert("false");
        return false;
    }
    else {
        printError(fieldErr, "");
        //alert("true");
        return true;
    }
}


//Backend Functions
function validateName() {
    var regex = /^[a-zA-Z/s]+$/;
    return validateField("name", "nameErr", regex);
}

function validateEmail() {
    var regex = /^\S+@\S+\.\S+$/;
    return validateField("email", "emailErr", regex);
}

function validatePhone() {
    var regex = /[0-9]{10}/;
    return validateField("mobile", "mobileErr", regex);
}



//Actual function being called
function validateForm() {

    var submit = document.getElementById("submit");

   

    //Validation array
    var valArray = new Array(5);
    valArray[0] = validateName();
    valArray[1] = validateEmail();
    valArray[2] = validatePhone();

    for (var i = 0; i < valArray.length; i++) {
        if (valArray[i] == false) {
            return false;
        }

    
    }
}