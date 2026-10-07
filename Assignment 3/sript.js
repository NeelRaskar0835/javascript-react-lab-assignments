document.getElementById("registrationForm").addEventListener(
    "submit",
    function(event) {

        // Prevent form from submitting
        event.preventDefault();

        // Get input values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let password = document.getElementById("password").value;

        // Assume form is valid
        let isValid = true;

        // Clear previous error messages
        document.getElementById("nameError").innerText = "";
        document.getElementById("emailError").innerText = "";
        document.getElementById("phoneError").innerText = "";
        document.getElementById("passwordError").innerText = "";
        document.getElementById("successMessage").innerText = "";


        // Validate Name
        if (name === "") {

            document.getElementById("nameError").innerText =
                "Name is required.";

            isValid = false;
        }


        // Validate Email
        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            document.getElementById("emailError").innerText =
                "Email is required.";

            isValid = false;

        } else if (!emailPattern.test(email)) {

            document.getElementById("emailError").innerText =
                "Please enter a valid email address.";

            isValid = false;
        }


        // Validate Phone
        let phonePattern = /^[0-9]{10}$/;

        if (phone === "") {

            document.getElementById("phoneError").innerText =
                "Phone number is required.";

            isValid = false;

        } else if (!phonePattern.test(phone)) {

            document.getElementById("phoneError").innerText =
                "Phone number must contain exactly 10 digits.";

            isValid = false;
        }


        // Validate Password
        if (password === "") {

            document.getElementById("passwordError").innerText =
                "Password is required.";

            isValid = false;

        } else if (password.length < 6) {

            document.getElementById("passwordError").innerText =
                "Password must contain at least 6 characters.";

            isValid = false;
        }


        // If all inputs are valid
        if (isValid) {

            document.getElementById("successMessage").innerText =
                "Registration successful!";

            // Clear the form
            document.getElementById("registrationForm").reset();
        }
    }
);