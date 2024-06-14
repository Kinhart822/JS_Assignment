$(document).ready(function () {
    let emailError = true;
    let passwordError = true;

    // Validate Email
    const email = document.getElementById("email");
    const emailValid = document.getElementById("emailvalid");

    email.addEventListener("blur", () => {
        let s = email.value.trim();

        // Kiểm tra độ dài của email
        if (s.length < 5 || s.length > 50) {
            email.classList.add("is-invalid");
            emailValid.style.display = "block";
            emailValid.innerHTML = "**Length of your email must be between 5 and 50";
            emailValid.style.color = "red";
            emailError = false; // Đặt flag lỗi email thành false
        } else {
            // Kiểm tra đúng định dạng email
            let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
            if (regex.test(s)) {
                email.classList.remove("is-invalid");
                emailValid.style.display = "none";
                emailError = true; // Đặt flag lỗi email thành true
            } else {
                email.classList.add("is-invalid");
                emailValid.style.display = "block";
                emailValid.innerHTML = "**Your email must be a valid email";
                emailValid.style.color = "red";
                emailError = false; // Đặt flag lỗi email thành false
            }
        }
    });

    // Validate Password
    const passcheck = $("#passcheck"); // Sử dụng jQuery để chọn phần tử có id là passcheck

    $("#password").keyup(function () {
        validatePassword();
    });

    function validatePassword() {
        let passwordValue = $("#password").val();

        if (passwordValue.length === 0) {
            passcheck.show();
            passcheck.html("**Password cannot be empty");
            passcheck.css("color", "red");
            passwordError = false; // Đặt flag lỗi password thành false
        } else if (passwordValue.length < 8 || passwordValue.length > 30) {
            passcheck.show();
            passcheck.html("**Length of your password must be between 8 and 30");
            passcheck.css("color", "red");
            passwordError = false; // Đặt flag lỗi password thành false
        } else {
            passcheck.hide();
            passwordError = true; // Đặt flag lỗi password thành true nếu không có lỗi
        }
    }

    // Submit button
    $("form").submit(function (event) {
        // Prevent form submission
        event.preventDefault();

        // Kiểm tra lại password trước khi submit
        validatePassword();

        // Kiểm tra emailError và passwordError
        if (emailError && passwordError) {
            // Nếu không có lỗi thì cho phép submit form
            alert("Form successfully submitted");
            this.submit();
            window.location.href = "ViewContents.html";
        } else {
            // Nếu có lỗi thì hiển thị thông báo lỗi
            alert("Please fill the form correctly");
        }
    });
});
