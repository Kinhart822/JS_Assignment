$(document).ready(function () {
    // Initialize validation error flags
    let emailError = true;
    let passwordError = true;
    let confirmPasswordError = true;
    let usernameError = true;

    // Validate Username
    $("#usercheck").hide();
    $("#usernames").keyup(function () {
        validateUsername();
    });

    function validateUsername() {
        let usernameValue = $("#usernames").val();
        if (usernameValue.length === 0) {
            $("#usercheck").show().html("**Username cannot be empty");
            usernameError = false;
        } else if (usernameValue.length < 3 || usernameValue.length > 30) {
            $("#usercheck").show().html("**Length of username must be between 3 and 30");
            usernameError = false;
        } else {
            $("#usercheck").hide();
            usernameError = true;
        }
    }

    // Validate Email
    $("#email").blur(function () {
        let emailValue = $(this).val().trim();
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

        if (emailValue.length === 0) {
            showError("#email", "#emailvalid", "**Email cannot be empty");
            emailError = false;
        } else if (emailValue.length < 5) {
            showError("#email", "#emailvalid", "**Length of your email must be larger than 5");
            emailError = false;
        } else if (!regex.test(emailValue)) {
            showError("#email", "#emailvalid", "**Your email must be a valid email");
            emailError = false;
        } else {
            hideError("#email", "#emailvalid");
            emailError = true;
        }
    });

    // Validate Password
    $("#passcheck").hide();
    $("#password").keyup(function () {
        validatePassword();
    });

    function validatePassword() {
        let passwordValue = $("#password").val();

        if (passwordValue.length === 0) {
            showError("#password", "#passcheck", "**Password cannot be empty");
            passwordError = false;
        } else if (passwordValue.length < 8 || passwordValue.length > 30) {
            showError("#password", "#passcheck", "**Length of your password must be between 8 and 30");
            passwordError = false;
        } else {
            hideError("#password", "#passcheck");
            passwordError = true;
        }
    }

    // Validate Confirm Password
    $("#conpasscheck").hide();
    $("#conpassword").keyup(function () {
        validateConfirmPassword();
    });

    function validateConfirmPassword() {
        let confirmPasswordValue = $("#conpassword").val();
        let passwordValue = $("#password").val();
        if (passwordValue !== confirmPasswordValue) {
            showError("#conpassword", "#conpasscheck", "**Password didn't Match");
            confirmPasswordError = false;
        } else if (passwordValue.length < 8 || passwordValue.length > 30) {
            showError("#conpassword", "#conpasscheck", "**Length of your password must be between 8 and 30");
            confirmPasswordError = false;
        } else {
            hideError("#conpassword", "#conpasscheck");
            confirmPasswordError = true;
        }
    }

    // Error handling functions
    function showError(inputField, errorField, errorMessage) {
        $(inputField).addClass("is-invalid");
        $(errorField).show().html(errorMessage).css("color", "red");
    }

    function hideError(inputField, errorField) {
        $(inputField).removeClass("is-invalid");
        $(errorField).hide();
    }

    // Form submission handling
    $("form").submit(function (event) {
        event.preventDefault();

        validateUsername();
        validatePassword();
        validateConfirmPassword();

        if (emailError && passwordError && confirmPasswordError && usernameError) {
            alert("Form successfully submitted");
            this.submit();
            window.location.href = "login.html";
        } else {
            alert("Please fill the form correctly");
        }
    });
});
