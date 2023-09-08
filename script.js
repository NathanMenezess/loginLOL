const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button')


const handLeFocus = ({target}) => {
    const span = target.previousElementSibling
    span.classList.add('span-active');
}

const handLeFocusOut = ({target}) => {

    if(target.value == '' ) {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }

    
}

const handLeChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8) {

        button.disabled = false;
    } else {
        button.disabled = true; 
    }
  } 
    



inputs.forEach((input) => input.addEventListener('focus', handLeFocus));
inputs.forEach((input) => input.addEventListener('focusout', handLeFocusOut));
inputs.forEach((input) => input.addEventListener('input', handLeChange));




