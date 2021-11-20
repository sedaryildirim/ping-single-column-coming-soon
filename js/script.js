const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', e => { // runs when submit is clicked/submitted on .form
    e.preventDefault(); // prevents sending of information as no backend
    const emailVal = email.value;

    if (!validateEmail(emailVal)) { //if below function does not have below characters / valid email
        form.classList.add('error'); // then add class .error to .form class list
    } else {
        form.classList.remove('error'); // if below function HAS valid email 
    }                                   // then remmove class .error from .form class list
});

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

