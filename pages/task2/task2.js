document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const terms = document.getElementById('terms').checked;

    // Error messages
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const termsError = document.getElementById('termsError');

    let hasError = false;

    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    termsError.textContent = '';

    // Validation checks
    if (name === '') {
        nameError.textContent = 'Name is required';
        hasError = true;
    }
    
    if (email === '') {
        emailError.textContent = 'Email is required';
        hasError = true;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Enter a valid email';
        hasError = true;
    }

    if (password === '') {
        passwordError.textContent = 'Password is required';
        hasError = true;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        hasError = true;
    }

    if (!terms) {
        termsError.textContent = 'You must agree to the terms';
        hasError = true;
    }

    if (!hasError) {
        alert('Form submitted successfully!');
        // Here you can submit the form or process it as needed
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
