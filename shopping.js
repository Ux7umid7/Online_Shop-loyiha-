// const minus = document.querySelector(".cart__dcrmnt");
// const minus2 = document.querySelector(".cart__dcrmnt2");
// const minus3 = document.querySelector(".cart__dcrmnt3");
// const plus = document.querySelector(".cart__incrmnt");
// const plus2 = document.querySelector(".cart__incrmnt2");
// const plus3 = document.querySelector(".cart__incrmnt3");
// let number = document.querySelector(".number");
// let number2 = document.querySelector(".number2");
// let number3 = document.querySelector(".number3");
// let price = document.querySelector(".cart__price");
// let price2 = document.querySelector(".cart__price2");
// let price3 = document.querySelector(".cart__price3");
let card = document.querySelector(".card__num");
let chek = document.querySelector(".chek");
let carderror = document.querySelector(".card__error");
const apply = document.querySelector(".apply");
let subtotal = document.querySelector(".subtotal__price");
let percent = document.querySelector(".percent__price");
let totalPrice = document.querySelector(".total__price");
// let p = [1399, 549, 399]

let urlgeted = localStorage.getItem("url")
let namegeted = localStorage.getItem("name")
let pricegeted = localStorage.getItem("price")

let cart = JSON.parse(localStorage.getItem("cart")) || []
let ul = document.querySelector(".store__left ul")

ul.innerHTML = ""

cart.forEach((item, index) => {
  ul.innerHTML += `
    <li class="store__cart">
        <img src="${item.img}" class="product__img" />
        <p class="cart__info">${item.name}</p>
        <div class="cart__number">
            <button onclick="decrease(${index})">-</button>
            <p id="num-${index}">1</p>
            <button onclick="increase(${index})">+</button>
        </div>
        <div class="cart__price">$${item.price}</div>
     
    </li>
    <hr />
    `
})

let quantities = new Array(cart.length).fill(1)

function increase(i) {
  quantities[i]++
  document.getElementById(`num-${i}`).textContent = quantities[i]
  hisobla()
}

function decrease(i) {
  if (quantities[i] > 0) {
    quantities[i]--
    document.getElementById(`num-${i}`).textContent = quantities[i]
    hisobla()
  }
}


function hisobla() {
  let subtotalValue = 0

  cart.forEach((item, i) => {
    subtotalValue += item.price * quantities[i]
  })

  let percentValue = subtotalValue * 0.02
  let totalValue = subtotalValue + percentValue

  subtotal.textContent = subtotalValue + "$"
  percent.textContent = percentValue + "$"
  totalPrice.textContent = totalValue + "$"
  localStorage.setItem('subtotal', subtotalValue)
  localStorage.setItem('percent', percentValue)
  localStorage.setItem('total', totalValue)
}

apply.addEventListener("click", function () {
  if (card.value == "") {
    carderror.textContent = "Enter your card number!";
    carderror.style.color = "red";
  }

  console.log();

  if (card.value.length != 16) {
    carderror.textContent =
      "There is an error in the card number. Please enter your full card number!";
    carderror.style.color = "red";
  } else {
    carderror.textContent = "Click Checkout!";
    carderror.style.color = "green";
    chek.addEventListener("click", function () {
      ul.textContent = ""
      window.location.href = "./paymet.html";
    });
  }
});

// function hisobla() {
//   const subtotalValue =
//     Number(number.textContent) * p[0] +
//     Number(number2.textContent) * p[1] +
//     Number(number3.textContent) * p[2];

//   const percentValue = subtotalValue * 0.02;
//   const totalValue = subtotalValue + percentValue;

//   subtotal.textContent = subtotalValue + "$";
//   percent.textContent = percentValue + "$";
//   totalPrice.textContent = totalValue + "$";

//   localStorage.setItem('subtotal', subtotalValue)
//   localStorage.setItem('percent', percentValue)
//   localStorage.setItem('total', totalValue)
// }


// plus.addEventListener("click", function () {
//   number.textContent = Number(number.textContent) + 1;
//   hisobla();
//   return;
// });
// plus2.addEventListener("click", function () {
//   number2.textContent = Number(number2.textContent) + 1;
//   hisobla();
//   return;
// });
// plus3.addEventListener("click", function () {
//   number3.textContent = Number(number3.textContent) + 1;
//   hisobla();
//   return;
// });
// minus.addEventListener("click", function () {
//   if (Number(number.textContent) > 0) {
//     number.textContent = Number(number.textContent) - 1;
//     hisobla();
//   }
//   return;
// });
// minus2.addEventListener("click", function () {
//   if (Number(number2.textContent) > 0) {
//     number2.textContent = Number(number2.textContent) - 1;
//     hisobla();
//   }
//   return;
// });
// minus3.addEventListener("click", function () {
//   if (Number(number3.textContent) > 0) {
//     number3.textContent = Number(number3.textContent) - 1;
//     hisobla();
//   }
//   return;
// });
// hisobla();
