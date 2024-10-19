document.addEventListener("DOMContentLoaded", function() {

    // Handle booking form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            const address = document.getElementById('address').value;

            document.getElementById('confirmationMessage').style.display = 'block';
            document.getElementById('confirmationMessage').textContent = `Service ${service} booked for ${date} at ${address}.`;
        });
    }

    // Handle login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            document.getElementById('loginMessage').style.display = 'block';
            document.getElementById('loginMessage').textContent = `Welcome back, ${email}!`;
        });
    }

    // Handle signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            document.getElementById('signupMessage').style.display = 'block';
            document.getElementById('signupMessage').textContent = `Thanks for signing up, ${name}!`;
        });
    }

});
