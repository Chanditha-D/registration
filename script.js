$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting normally

        let valid = true;

        // Validate Name
        const name = $('#name').val().trim();
        if (name.length < 2) {
            alert('Name must be at least 2 characters long.');
            valid = false;
        }

        // Validate Email
        const email = $('#email').val().trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            valid = false;
        }

        // Validate Phone
        const phone = $('#phone').val().trim();
        if (!/^[0-9]{10}$/.test(phone)) {
            alert('Phone number must be 10 digits.');
            valid = false;
        }

        // Validate DOB
        const dob = $('#dob').val();
        if (!dob) {
            alert('Please select your date of birth.');
            valid = false;
        }

        // Validate Address
        const address = $('#address').val().trim();
        if (address.length < 10) {
            alert('Address must be at least 10 characters long.');
            valid = false;
        }

        // Validate Gender
        const gender = $('#gender').val();
        if (!gender) {
            alert('Please select your gender.');
            valid = false;
        }

        if (valid) {
            // If the form is valid, simulate a 404 error page (for demonstration)
            alert('404 Error: Page Not Found');
            // Optionally, you can redirect to a custom 404 page
            // window.location.href = '/404.html';
        }
    });
});
