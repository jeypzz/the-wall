const form = document.getElementById('signup-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpass = document.getElementById('Cpass');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = cpass.value.trim();
    let testCase = 0;
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        testCase++;
        setError(email,'');
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        testCase++;
        setError(password,'');
    }

    if(password2Value === '') {
        setError(cpass, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(cpass, "Passwords doesn't match");
    } else {
        testCase++;
        setError(cpass,'');
    }

    if(testCase == 3) {
        window.location="index.html";
    }
};