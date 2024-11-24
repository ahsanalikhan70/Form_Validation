// Required
const email_req = document.getElementById("email-req");
const password_req = document.getElementById("password-req");

//Button
const button = document.getElementById("btn");

button.addEventListener(
  "click",
  (e) => {
    e.preventDefault();

    if (EmailValidation() && PasswordValidation()) {

      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      let user_data = JSON.parse(localStorage.getItem("user_details")) ?? [];
      let user = user_data.find(user => user.email == email && user.password == password );


      if (user) {
  
        function showalert(){
          swal({
            title: "Good job!",
            text: "Login succesfully",
            icon: "success",
          });
        }
        showalert();


        setTimeout(() => {
          window.location.href = 'dashboard.html';

        }, 1000);
        

        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        email_req.previousElementSibling.classList.remove("fa-circle-check");
        password_req.previousElementSibling.classList.remove("fa-circle-check");
       
      } 
      else {
        email_req.previousElementSibling.classList.add("fa-circle-xmark");
        password_req.previousElementSibling.classList.add("fa-circle-xmark");
        swal({
          title: "Error",
          text: "Email or paassword is incorrect",
          icon: "error",
          button: "Ok",
        });

      }
    }
  }
)
    


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
