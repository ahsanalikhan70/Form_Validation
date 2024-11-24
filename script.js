// Required
const name_req = document.getElementById("name-req");
const email_req = document.getElementById("email-req");
const password_req = document.getElementById("password-req");

// let input_name = document.getElementById("name").value;
// let input_email = document.getElementById("email").value;
// let input_password = document.getElementById("password").value;

//Button
const button = document.getElementById("btn");

button.addEventListener("click", (e) => {

  e.preventDefault();

  if (NameValidation() && EmailValidation() && PasswordValidation()) {

    let input_name = document.getElementById("name").value;
    let input_email = document.getElementById("email").value;
    let input_password = document.getElementById("password").value;

    let checkstatus = 0;
    let user_data = JSON.parse(localStorage.getItem("user_details")) ?? [];
    for(let v of user_data){
      if(v.name == input_name || v.email== input_email){
        checkstatus = 1;
        break;
      }
    }

    if(checkstatus == 1){

    name_req.previousElementSibling.classList.add("fa-circle-xmark");
    email_req.previousElementSibling.classList.add("fa-circle-xmark");
    password_req.previousElementSibling.classList.add("fa-circle-xmark");
    
    swal({
      title: "Error",
      text: "Name or email already exist",
      icon: "error",
      button: "Ok",
    })

    }
    else{
    
    user_data.push({
      name: input_name,
      email: input_email,
      password: input_password,
    });


    localStorage.setItem("user_details", JSON.stringify(user_data));
    console.log(input_name, input_email, input_password);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    name_req.previousElementSibling.classList.remove("fa-circle-check");
    email_req.previousElementSibling.classList.remove("fa-circle-check");
    password_req.previousElementSibling.classList.remove("fa-circle-check");
    // alert("Form Submitted succesfully");
    swal({
      title: "Good job!",
      text: "Form Submitted succesfully",
      icon: "success",
      button: "Ok",
    });

  }

  }

  
});


//NAME VALIDATION
function NameValidation() {
  let input_name = document.getElementById("name").value;
  // localStorage.setItem("Name" , input_name)

  if (input_name.length == 0) {
    name_req.innerHTML = "Name is Req in more than 5 characters";
    name_req.previousElementSibling.classList.add("fa-circle-xmark");
    return false;
  } else {
    name_req.innerHTML = "";
    name_req.previousElementSibling.classList.add("fa-circle-check");
    name_req.previousElementSibling.classList.remove("fa-circle-xmark");
  }
  return true;
}


//EMAIL VALIDATION

function EmailValidation() {
  let input_email = document.getElementById("email").value;
  // localStorage.setItem("Email" , input_email)

  if (input_email.length == 0) {
    email_req.innerHTML = "Email is Req!";
    email_req.previousElementSibling.classList.add("fa-circle-xmark");
    return false;
  }
  if (
    !input_email.match(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    )
  ) {
    email_req.innerHTML = "Enter Correct Email";
    email_req.previousElementSibling.classList.add("fa-circle-xmark");
    return false;
  }
  email_req.innerHTML = "";
  email_req.previousElementSibling.classList.add("fa-circle-check");
  email_req.previousElementSibling.classList.remove("fa-circle-xmark");

  return true;
}

  
//PASSWORD VALIDATION

function PasswordValidation() {
  let input_password = document.getElementById("password").value;
  // localStorage.setItem("Password" , input_password)

  if (input_password.length == 0) {
    password_req.innerHTML = "Password is Req";
    password_req.previousElementSibling.classList.add("fa-circle-xmark");
    return false;
  }
  if (!input_password.match(/^[A-Za-z]\w{7,14}$/)) {
    password_req.innerHTML =
      "Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter";
    password_req.previousElementSibling.classList.add("fa-circle-xmark");
    return false;
  }
  password_req.innerHTML = "";
  password_req.previousElementSibling.classList.add("fa-circle-check");
  password_req.previousElementSibling.classList.remove("fa-circle-xmark");

  return true;
}
