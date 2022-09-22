function onChange () {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');


    if (password.value === confirmPassword.value) {
     confirmPassword.setCustomValidity = '';
     confirmPassword.style.border='1px solid rgb(120, 255, 120)';
   
    } 
    else {
        confirmPassword.setCustomValidity = 'Passwords do not match';
        confirmPassword.style.border='1px solid rgb(230, 111, 75)';
    } 

    }
