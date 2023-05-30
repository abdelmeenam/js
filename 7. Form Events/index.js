//  7.1 : submit event is fired when a form is submitted

const form = document.querySelector('.signup-from');
const username = form.username.value;
const feedback = document.querySelector('.feedback')
const usernamePattern = /^[a-zA-Z]{3,15}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    //validation
    if (usernamePattern.test(username)) {
        feedback.textContent = 'valid username';
    } else {
        feedback.textContent = 'not valid';
    }
});


//real time validation : fire callback event with every key press
form.username.addEventListener('keyup', e => {
    if (usernamePattern.test(e.target.value)) {
        feedback.textContent = 'valid username';
    } else {
        feedback.textContent = 'not valid';
    }
})

