const form = document.querySelector("#login_form");
const emailValid = document.querySelector('#valid-email');
const passwordInvalid = document.querySelector('#valid-password');
const passwordPattern = /^[A-Z](\w){5,12}$/;

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    //TODO if inputs are valid
});

form.password.addEventListener('keyup', (e) =>{
    if(!passwordPattern.test(e.target.value) && e.target.value != ""){
        e.target.setAttribute('class', 'invalid');
        passwordInvalid.style.display = 'block';
    }else{
        e.target.removeAttribute('class');
        passwordInvalid.style.display = 'none';
    }
});
