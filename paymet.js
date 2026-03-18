let address = document.querySelector(".address");
let telnomer = document.querySelector(".nomer");
let cardholder = document.querySelector(".holder");
let cardnumber = document.querySelector(".number");
let carddate = document.querySelector(".date");
let cardcvv = document.querySelector(".cvv");
let pay = document.querySelector(".pay");
let error = document.querySelector(".error");
let addresserror = document.querySelector(".address__error");
let telnomererror = document.querySelector(".telnomer__error");

pay.addEventListener("click", function () {
    error.textContent = "";
    addresserror.textContent = "";
    telnomererror.textContent = "";

    if (
        address.value === "" ||
        telnomer.value === "" ||
        cardholder.value === "" ||
        cardnumber.value === "" ||
        carddate.value === "" ||
        cardcvv.value === ""
    ) {
        error.textContent = "Enter full information!";
        error.style.color = "red";
        return;
    }

    if (cardnumber.value.length != 16) {
        error.textContent =
            "There is an error in the card number. Please enter your full card number!";
        error.style.color = "red";
        return;
    }

    if (!isNaN(cardholder.value)) {
        error.textContent = "Card holder name must be text!";
        error.style.color = "red";
        return;
    }

    let phone = telnomer.value.trim();

    if (!phone.startsWith("+998")) {
        telnomererror.textContent = "Phone number must start with +998!";
        telnomererror.style.color = "red";
        return;
    }

    let operator = phone.slice(4, 6);
    let Operators = ["90", "91", "93", "94", "97", "95", "99", "88", "98"];

    if (!Operators.includes(operator)) {
        telnomererror.textContent = "Invalid operator code!";
        telnomererror.style.color = "red";
        return;
    }

    error.textContent = "Payment Successful!";
    error.style.color = "green";

    setTimeout(function () {
        window.location.href = "./buyurtma.html";
    }, 1000);
});
