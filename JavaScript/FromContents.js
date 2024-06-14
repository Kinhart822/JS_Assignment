$(document).ready(function () {
    // Initialize validation error flags
    let titleError = true;
    let briefError = true;
    let contentError = true;

    // Validate Title
    $("#title").keyup(function () {
        validateTitle();
    });

    function validateTitle() {
        let titleValue = $("#title").val().trim();
        if (titleValue.length < 10 || titleValue.length > 200) {
            showError("#title", "#title-check", "**Length of title must be between 10 and 200 characters");
            titleError = false;
        } else {
            hideError("#title", "#title-check");
            titleError = true;
        }
    }

    // Validate Brief
    $("#brief").keyup(function () {
        validateBrief();
    });

    function validateBrief() {
        let briefValue = $("#brief").val().trim();
        if (briefValue.length < 30 || briefValue.length > 150) {
            showError("#brief", "#brief-check", "**Length of brief must be between 30 and 150 characters");
            briefError = false;
        } else {
            hideError("#brief", "#brief-check");
            briefError = true;
        }
    }

    // Validate Content
    $("#content").keyup(function () {
        validateContent();
    });

    function validateContent() {
        let contentValue = $("#content").val().trim();
        if (contentValue.length < 50 || contentValue.length > 1000) {
            showError("#content", "#content-check", "**Length of content must be between 50 and 1000 characters");
            contentError = false;
        } else {
            hideError("#content", "#content-check");
            contentError = true;
        }
    }

    // Error handling functions
    function showError(inputField, errorField, errorMessage) {
        $(inputField).addClass("is-invalid");
        $(errorField).show().html(errorMessage);
    }

    function hideError(inputField, errorField) {
        $(inputField).removeClass("is-invalid");
        $(errorField).hide();
    }

    // Form submission handling
    $("#contentForm").submit(function (event) {
        event.preventDefault();

        validateTitle();
        validateBrief();
        validateContent();

        if (titleError && briefError && contentError) {
            this.submit();
            window.location.href = "ViewContents.html";
        } else {
            alert("Please fill out the form correctly.");
        }
    });


});
