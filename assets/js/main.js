// dom variables
// form input fields
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

// buttons
const submitBtn = document.querySelectorAll('button[type=submit]')[0];
const resetBtn = document.querySelectorAll('button[type=reset]')[0];

function disableElement(element) {
    element.disabled = true;
    element.classList.add('noHover');
}

function isEmpty(element) {
    return element.value == '';
}

function addClassTo(element, className) {
    element.classList.add(className);
}

function removeClassFrom(element, className) {
    element.classList.remove(className);
}

disableElement(submitBtn);

// alert a message when the user clicks on the reset button when input fields are empty
resetBtn.addEventListener('click', () => {
    if (isEmpty(username) && isEmpty(email)) {
        alert('Empty!');
    }
});

// activate the submit button only when the form is completed
window.addEventListener('keyup', () => {
    if (isEmpty(username) || isEmpty(email) || isEmpty(password)) {
        submitBtn.disabled = true;
        addClassTo(submitBtn, 'noHover');
    } else {
        submitBtn.disabled = false;
        removeClassFrom(submitBtn, 'noHover');
    }
});
