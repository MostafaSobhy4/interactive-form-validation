let form = document.querySelector("#userForm");

let name = document.querySelector("#userForm #name");
let email = document.querySelector("#userForm #email");
let phone = document.querySelector("#userForm #phone");
let phone_codes = document.querySelector(".container .input-box select");
let password = document.querySelector("#userForm #password");

let name_error = document.getElementById("nameError");
let email_error = document.getElementById("emailError");
let phone_error = document.getElementById("phoneError");
let password_error = document.getElementById("passwordError");


phone.addEventListener("input", () => {
    phone.value = phone.value.replace(/\D/g, "");
});


const toggle_password = document.getElementById("toggle-password");

toggle_password.addEventListener("click", () => {
    toggle_password.classList.toggle("fa-eye-slash");
    toggle_password.classList.toggle("fa-eye");
    password.type = password.type === "password" ? "text" : "password";
});

let submit = document.querySelector("#userForm button");

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

submit.addEventListener("click", (e) => {
    e.preventDefault();

    name_error.textContent = "";
    email_error.textContent = "";
    phone_error.textContent = "";
    password_error.textContent = "";

    let hasError = false;

    if (name.value.length < 3) {
        name_error.textContent = "Name must be longer than 2 characters";
        hasError = true;
    }

    else if (!emailPattern.test(email.value)) {
        email_error.textContent = "Invalid email format. Example: user@gmail.com";
        hasError = true;
    }

    else if (phone.value.length < 7) {
        phone_error.textContent = "Phone must be at least 7 digits";
        hasError = true;
    }

    else if (!passwordPattern.test(password.value)) {
        password_error.textContent = "Password must be at least 8 characters, include uppercase, number, and special character Like [!@#$%^&*].";
        hasError = true;
    }

    if (!hasError) {
        let Accounts = {
            name: name.value,
            email: email.value,
            phone: phone_codes.value + phone.value,
            password: password.value
        };

        let Accounts_Data = JSON.parse(localStorage.getItem("Accounts")) || [];
        Accounts_Data.push(Accounts);

        localStorage.setItem("Accounts", JSON.stringify(Accounts_Data));

        console.log("Data saved to localStorage!");

        name.value = "";
        email.value = "";
        phone.value = "";
        password.value = "";
    }
});
