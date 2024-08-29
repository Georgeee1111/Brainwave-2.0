document.addEventListener('DOMContentLoaded', function() {
    const $ = (selector) => document.querySelector(selector);
    const [container, registerBtn, loginBtn, loginButton, usernameInput, strengthLabel, 
        passwordInput, passwordStrengthLabel, confirmPasswordInput, confirmPasswordLabel] = [
        '#container', '#register', '#login', '#loginButton', '#usernameInput', '#strengthLabel', 
        '#passwordInput', '#passwordStrengthLabel', '#confirmPasswordInput', '#confirmPasswordLabel'
    ].map($);

    function checkStrength(input, label) {
        const value = input.value;
        const length = value.length;

        if (length < 4) {
            label.textContent = 'Weak';
            label.style.color = 'yellow';
        } else if (length < 8) {
            label.textContent = 'Moderate';
            label.style.color = 'orange';
        } else {
            label.textContent = 'Strong';
            label.style.color = 'white';
        }
    }

    function openModal(message) {
        const modal = document.getElementById('modal');
        const modalMessage = document.getElementById('modal-message');
        modalMessage.textContent = message;
        modal.style.display = 'block';

        setTimeout(() => {
            modal.style.display = 'none';
        }, 2000);
    }

    function updateConfirmPasswordLabel() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        if (confirmPassword === '') {
            confirmPassword.style.display = 'none';
        }else if (password === confirmPassword && password !== '') {
            confirmPasswordLabel.textContent = 'Password Matches';
            confirmPasswordLabel.style.color = 'green';
        } else {
            confirmPasswordLabel.textContent = 'Password does not match';
            confirmPasswordLabel.style.color = 'red';
        } 

    }

    function validateRegistration(event) {
        const username = usernameInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const hasCapitalLetter = /[A-Z]/.test(password);
        const hasSmallLetter = /[a-z]/.test(password);
        const hasANumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

        if (username.length < 4) {
            openModal('Username is too short.');
            event.preventDefault();
            return false;
        }

        if (password !== confirmPassword || password === '') {
            openModal('Password does not match.');
            event.preventDefault();
            return false;
        }
        
        if (password.length < 4) {
            openModal('Password is too short.');
            event.preventDefault();
            return false;
        }
        if (!(hasCapitalLetter && hasSmallLetter && hasANumber && hasSpecialChar)) {
            openModal('Please check your password if it meets the criteria to be a strong password');
            event.preventDefault();
            return false;
        }

        // Return true if the registration is successful
        openModal('Registered Successfully!');
        return true; 
    }

    // Original function to handle the form submission
    $('form').addEventListener('submit', function(event) {
        if (this.getAttribute('action').includes('../PHPforLoginPage/RonaLogin.php')) {
            if (!validateRegistration(event)) {
                // Prevent default behavior only if validation fails
                return;
            }
            // If validation passes, the form will submit as usual
        }
    });

    usernameInput.addEventListener('input', () => {
        checkStrength(usernameInput, strengthLabel);
    });

    passwordInput.addEventListener('input', () => {
        checkStrength(passwordInput, passwordStrengthLabel);
        updateConfirmPasswordLabel(); // Update confirmation message on password input change
    });

    confirmPasswordInput.addEventListener('input', () => {
        updateConfirmPasswordLabel(); // Update confirmation message on confirm password input change
    });

    registerBtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("passwordInput");
    const passwordDescription = document.getElementById("passwordDescription");

    passwordInput.addEventListener("input", function() {
        // Get the current value of the password input
        const password = passwordInput.value;

        // Initialize the description with the default message
        let description = "Please enter a password with a minimum of 8 characters, combination of capital letters, small letters, numbers and special characters.";

        // Check if the password contains at least one capital letter and one small letter
        const hasCapitalLetter = /[A-Z]/.test(password);
        const hasSmallLetter = /[a-z]/.test(password);
        const hasANumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

        // Modify the description based on the conditions being met
        if (hasCapitalLetter && hasSmallLetter) {
            // If both capital and small letters are present, remove their description from the message
            description = description.replace(", combination of capital letters, small letters", "");
        }

        if (hasANumber) {
            // If a number is present, remove its description from the message
            description = description.replace(", numbers", "");
        }

        if (hasSpecialChar) {
            // If a special character is present, remove its description from the message
            description = description.replace("and special characters.", "");
        }

        // If all criteria are met, update the description
        if (password.length >= 8 && hasCapitalLetter && hasSmallLetter && hasANumber && hasSpecialChar) {
            description = "Strong";
            passwordDescription.style.color = "white";
        } else {
            passwordDescription.style.color = "yellow"; // Reset color if not strong
        }

        // Update the aria-describedby attribute with the modified description
        passwordDescription.textContent = description.trim(); // trim() to remove any leading/trailing spaces
        if (description.trim() === "") {
            passwordDescription.style.display = "none"; // Hide the description if it's empty
        } else {
            passwordDescription.style.display = "block"; // Show the description if it's not empty
        }
    });
});


