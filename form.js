const form = document.getElementById("registerForm")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const title = document.querySelector('.title')
const second = document.querySelector('.second')
const emailError = document.getElementById("emailError")
const passError = document.getElementById("passError")
const confirmError = document.getElementById("confirmError")
const togglePass = document.getElementById("togglePass")
const togglePass2 = document.getElementById("togglePass2")
const submit = document.getElementById("submit")
const unutish = document.querySelector(".parol__unut")




if (localStorage.getItem('userEmail') && localStorage.getItem('userPassword')) {
    title.textContent = 'Log In'
    second.style.display = 'none'
    togglePass.addEventListener("click", function () {
        if (password.type === "password") {
            password.type = "text";
            togglePass.textContent = "🙈";
        } else {
            password.type = "password";
            togglePass.textContent = "👀";
        }
    });
    togglePass2.addEventListener("click", function () {
        if (confirmPassword.type === "password") {
            confirmPassword.type = "text";
            togglePass2.textContent = "🙈";
        } else {
            confirmPassword.type = "password";
            togglePass2.textContent = "👀";
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailError.textContent = "";
        passError.textContent = "";
        confirmError.textContent = "";

        if (email.value.trim() != localStorage.getItem('userEmail')) {
            emailError.textContent = "Emailingiz boshqa";
            return;
        }

        if (password.value != localStorage.getItem('userPassword')) {
            passError.textContent = "Parol bir xil emas";
            return;
        }
        email.value = ''
        password.value = ''

        window.location.href = "./main.html";

    })

    let a = false
    unutish.addEventListener('click', function () {
        a = true

        if (a == true) {
            email.value = ''
            password.value = ''

            submit.style = 'margin:0 auto; display:block;'
            second.style.display = 'block'
            second.style = ''
            unutish.style.display = 'none'
            title.textContent = 'Parolni qaytarish'

            form.addEventListener("submit", function (e) {
                e.preventDefault();

                if (email.value.trim() != localStorage.getItem('userEmail')) {
                    emailError.textContent = "Emailingiz boshqa";
                    return;
                }
                if (password.value == localStorage.getItem('userPassword')) {
                    passError.textContent = "Eski parolni kiritmang";
                    return;
                }
                if (password.value.length < 6) {
                    passError.textContent = "Yangi parol kamida 6 ta belgidan bo'lsin";
                    return;
                }

                if (password.value != confirmPassword.value.trim()) {
                    confirmError.textContent = "Parollar xato";
                    return;
                }

                localStorage.setItem("userPassword", password.value);
                window.location.href = './index.html'
            })
        }
    })


}



else {

    unutish.style.display = 'none'

    togglePass.addEventListener("click", function () {
        if (password.type === "password") {
            password.type = "text";
            togglePass.textContent = "🙈";
        } else {
            password.type = "password";
            togglePass.textContent = "👀";
        }
    });

    togglePass2.addEventListener("click", function () {
        if (confirmPassword.type === "password") {
            confirmPassword.type = "text";
            togglePass2.textContent = "🙈";
        } else {
            confirmPassword.type = "password";
            togglePass2.textContent = "👀";
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailError.textContent = "";
        passError.textContent = "";
        confirmError.textContent = "";

        if (!email.value.trim().endsWith("@gmail.com")) {
            emailError.textContent = "Email faqat @gmail.com bilan bolishi kerak";
            return;
        }

        if (password.value.length < 6) {
            passError.textContent = "Parol kamida 6 ta belgidan bo'lsin";
            return;
        }

        if (password.value !== confirmPassword.value.trim()) {
            confirmError.textContent = "Parollar xato";
            return;
        }

        localStorage.setItem("userEmail", email.value);
        localStorage.setItem("userPassword", password.value);


        window.location.href = "./main.html";
    });
    email.value = ''
    password.value = ''
    confirmPassword.value = ''
}

