// // LOGIN VALIDATION

// var username = document.getElementById("username-error");
// var passWord = document.getElementById("password-error");
// var submit = document.getElementById("submit-error");

// // EMAIL

// function userName(callback){
//     var us = document.getElementById("username").value;

//     if (us.trim() === "") {
//         username.innerHTML = "Mandatory Field";
//         username.style.color = "red";
//         callback(false) ;
//     }

//     if(us ==="admin"){
//         username.innerHTML = '<i class="fas fa-check-circle"></i>';
//         username.style.color = "seagreen";
//         callback(true) ;
//     }
//     else{
//         username.innerHTML = "Invalid Username";
//         username.style.color = "red";
//         callback(false) ;
//     }
// }


// // PASSWORD

// function PassWord(callback){
//     var p =document.getElementById("password").value;

//     if (p.trim() === "") {
//         passWord.innerHTML = "Mandatory Field";
//         passWord.style.color = "red";
//         callback(false) ;
//       }

//     if(p != '12345'){
//         passWord.innerHTML = "Invalid Password";
//         passWord.style.color = "red";
//         callback(false) ;
//     }
//     else{
//         passWord.innerHTML = '<i class="fas fa-check-circle"></i>';
//         passWord.style.color = "seagreen";
//         callback(true);
        
//     }
// }

// // TOGGLE PASSWORD

// function togglePassword(){

//     var p = document.getElementById("password");

//     if (p.type === 'password') {
//         p.type = 'text';
        
//     } else {
//         p.type = 'password';

//     }
// }

// // FORM VALIDATION

// // function validateForm(){
// //     if(userName() && PassWord()){
// //         window.location = "home.html";
// //     }
// //     else{
// //         submit.style.display = "block";
// //         submit.innerHTML = "Please fix errors to Login";
// //         setTimeout(function(){submit.style.display = "none";}, 3000);
// //         callback(false);
// //     }
// // }
// // FORM VALIDATION

// function validateForm(callback){
//     userName(function(response){
//         if(!response){
//             submit.style.display = "block";
//             submit.innerHTML = "Please fix errors to Login";
//             setTimeout(function(){submit.style.display = "none";}, 3000);
//             callback(false);
//             return;
//         }
//     })

//     PassWord(function(response){
//         if(!response){
//             submit.style.display = "block";
//             submit.innerHTML = "Please fix errors to Login";
//             setTimeout(function(){submit.style.display = "none";}, 3000);
//             callback(false);
//             return;
//         }
//     window.location = "home.html";
//     callback(true);
//       }
//     );
// };
  

// LOGIN VALIDATION

var username = document.getElementById("username-error");
var passWord = document.getElementById("password-error");
var submit = document.getElementById("submit-error");

// EMAIL

function userName(callback = () => {}) {
  var us = document.getElementById("username").value;

  if (us.trim() === "") {
    username.innerHTML = "Mandatory Field";
    username.style.color = "red";
    callback(false);
    return;
  }

  if (us === "admin") {
    username.innerHTML = '<i class="fas fa-check-circle"></i>';
    username.style.color = "seagreen";
    callback(true);
  } else {
    username.innerHTML = "Invalid Username";
    username.style.color = "red";
    callback(false);
  }
}

// PASSWORD

function PassWord(callback = () => {}) {
  var p = document.getElementById("password").value;

  if (p.trim() === "") {
    passWord.innerHTML = "Mandatory Field";
    passWord.style.color = "red";
    callback(false);
    return;
  }

  if (p !== "12345") {
    passWord.innerHTML = "Invalid Password";
    passWord.style.color = "red";
    callback(false);
  } else {
    passWord.innerHTML = '<i class="fas fa-check-circle"></i>';
    passWord.style.color = "seagreen";
    callback(true);
  }
}

// TOGGLE PASSWORD

function togglePassword() {
  var p = document.getElementById("password");

  if (p.type === "password") {
    p.type = "text";
  } else {
    p.type = "password";
  }
}

// FORM VALIDATION

function validateForm(callback) {
    var usernameValid = false;
    var passwordValid = false;
    var validationCount = 0;
  
    userName(function(response) {
      if (!response) {
        usernameValid = false;
      } else {
        usernameValid = true;
      }
      validationCount++;
      checkValidation();
    });
  
    PassWord(function(response) {
      if (!response) {
        passwordValid = false;
      } else {
        passwordValid = true;
      }
      validationCount++;
      checkValidation();
    });
  
    function checkValidation() {
      if (validationCount === 2) {
        if (usernameValid && passwordValid) {
          if (typeof callback === "function") {
            callback(true);
          }
          window.location.href = "home.html";
        } else {
          submit.style.display = "block";
          submit.innerHTML = "Please fix errors to Login";
          setTimeout(function() {
            submit.style.display = "none";
          }, 3000);
          if (typeof callback === "function") {
            callback(false);
          }
        }
      }
    }
  }
