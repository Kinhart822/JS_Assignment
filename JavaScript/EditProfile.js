$(document).ready(function () {
    // Initialize validation error flags
    let firstNameError = true;
    let lastNameError = true;
    let emailError = true;
    let phoneError = true;

    // Validate First Name
    $("#first-name-check").hide();
    $("#first-name").keyup(function () {
        validateFirstName();
    });

    function validateFirstName() {
        let firstNameValue = $("#first-name").val().trim();
        if (firstNameValue.length === 0) {
            showError("#first-name", "#first-name-check", "**First Name cannot be empty");
            firstNameError = false;
        } else if (firstNameValue.length < 3 || firstNameValue.length > 30) {
            showError("#first-name", "#first-name-check", "**Length of First Name must be between 3 and 30");
            firstNameError = false;
        } else {
            hideError("#first-name", "#first-name-check");
            firstNameError = true;
        }
    }

    // Validate Last Name
    $("#last-name-check").hide();
    $("#last-name").keyup(function () {
        validateLastName();
    });

    function validateLastName() {
        let lastNameValue = $("#last-name").val().trim();
        if (lastNameValue.length === 0) {
            showError("#last-name", "#last-name-check", "**Last Name cannot be empty");
            lastNameError = false;
        } else if (lastNameValue.length < 3 || lastNameValue.length > 30) {
            showError("#last-name", "#last-name-check", "**Length of Last Name must be between 3 and 30");
            lastNameError = false;
        } else {
            hideError("#last-name", "#last-name-check");
            lastNameError = true;
        }
    }

    // Validate Email
    $("#email-check").hide();
    $("#email").blur(function () {
        validateEmail();
    });

    function validateEmail() {
        let emailValue = $("#email").val().trim();
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

        if (emailValue.length === 0) {
            showError("#email", "#email-check", "**Email cannot be empty");
            emailError = false;
        } else if (!regex.test(emailValue)) {
            showError("#email", "#email-check", "**Your email must be a valid email");
            emailError = false;
        } else {
            hideError("#email", "#email-check");
            emailError = true;
        }
    }

    // Validate Phone
    $("#phone-check").hide();
    $("#phone").keyup(function () {
        validatePhone();
    });

    function validatePhone() {
        let phoneValue = $("#phone").val().trim();
        let regex = /^[0-9]{9,13}$/;

        if (phoneValue.length === 0) {
            showError("#phone", "#phone-check", "**Phone number cannot be empty");
            phoneError = false;
        } else if (!regex.test(phoneValue)) {
            showError("#phone", "#phone-check", "**Phone number must be a valid number between 9 and 13 digits");
            phoneError = false;
        } else {
            hideError("#phone", "#phone-check");
            phoneError = true;
        }
    }

    // Validate Description
    $("#description-check").hide();
    $("#description").keyup(function () {
        validateDescription();
    });

    function validateDescription() {
        let descriptionValue = $("#description").val().trim();
        if (descriptionValue.length > 200) {
            showError("#description", "#description-check", "**Description cannot exceed 200 characters");
        } else {
            hideError("#description", "#description-check");
        }
    }

    // Error handling functions
    function showError(inputField, errorField, errorMessage) {
        $(inputField).addClass("is-invalid");
        $(errorField).show().text(errorMessage);
    }

    function hideError(inputField, errorField) {
        $(inputField).removeClass("is-invalid");
        $(errorField).hide();
    }

    // Form submission handling
    $("#profileForm").submit(function (event) {
        event.preventDefault();

        validateFirstName();
        validateLastName();
        validateEmail();
        validatePhone();
        validateDescription();

        if (firstNameError && lastNameError && emailError && phoneError) {
            this.submit();
            window.location.href = "FormContents.html";
        } else {
            alert("Please fill the form correctly");
        }
    });
});
