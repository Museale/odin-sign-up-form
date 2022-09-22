function onChange () {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');


    if (password.value === confirmPassword.value) {
     confirmPassword.setCustomValidity = '';
     confirmPassword.style.border='2px solid green';
   
    } 
    else {
        confirmPassword.setCustomValidity = 'Passwords do not match';
        confirmPassword.style.border='2px solid red';
    } 

    }

    // const firstname = document.querySelector('[name=first_name]');
    //     firstname.addEventListener('invalid', () => {
    //     firstname.setCustomValidity('Please enter your first name.');
    //     }, once,true);

    // const lastname = document.querySelector('[name=last_name]');
    //     lastname.addEventListener('invalid', () => {
    //     lastname.setCustomValidity('Please enter your last name.');
    //     }, once,true);

    //     const email = document.querySelector('[name=user_email]');
    //     email.addEventListener('invalid', () => {
    //     email.setCustomValidity('Please enter your email.');
    //     });


        // allfields.addEventListener('invalid', (e) => {
        //     let inputfield = e.target;
        //     inputfield.setCustomValidity('Please enter your ${e.target.value}');
        // });


