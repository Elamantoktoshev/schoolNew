const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const fullName = document.getElementById("fullName-field")

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const fullName = loginForm.fullName.value

    if (username == "happy" && password == "happy123" || username == "elaman" && password == "elaman123" || username == "krasava" && password == "krasava123") {
        alert("You have successfully logged in. WElcome: " + fullName);
        location.reload();
    } else {
        loginErrorMsg.style.opacity = .8;
    }
})