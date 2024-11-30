const form = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

function validateEmail(email){
if(email.length<=3){
    emailError.textContent = "Email must be longer than 3 characters.";
return false;
}

if(!email.includes("@") || !email.includes(".")){
    emailError.textContent = "Email must contain '@' and '.'.";
    return false;
}
emailError.textContent = '';
return true;

};

function validatePassword(password){
    if(password.length<=8){
        passwordError.textContent = 'password must be longer than 8 characters.';
        return false;
    };
    passwordError.textContent='';
    return true;
};

function updateSuccessMessage(isvalidemail , isvalidpassword){
    if(isvalidemail && isvalidpassword){
        successMessage.textContent = "All good to go!"
    }
    else{
        successMessage.textContent = '';
    }
}

emailInput.addEventListener('input',()=>{
    validateEmail(emailInput.value);
    updateSuccessMessage(validateEmail(emailInput.value), validatePassword(passwordInput.value));
});

passwordInput.addEventListener('input',()=>{
    validatePassword(passwordInput.value);
    updateSuccessMessage(validateEmail(emailInput.value), validatePassword(passwordInput.value));

});

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  if(isEmailValid && isPasswordValid){
    successMessage.textContent = "All good to go!";
    const confirmation = confirm("Do you want to proceed?");
    if(confirmation){
        alert("Successful signup");
        form.reset();
        successMessage.textContent='';
    }else{
        emailInput.value = "";
        passwordInput.value = "";
        successMessage.textContent = "";
    }
    
  }
  else{
    successMessage.textContent = '';
  }

})