let card = document.querySelector(".card__num");
let chek = document.querySelector(".chek");
let carderror = document.querySelector(".card__error");
const apply = document.querySelector(".apply");
let subtotal = document.querySelector(".subtotal__price");
let percent = document.querySelector(".percent__price");
let totalPrice = document.querySelector(".total__price");


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
  let subtotal1 = 0

  cart.forEach((item, i) => {
    subtotal1 += item.price * quantities[i]
  })

  let percent1 = subtotal1 * 0.02
  let total1 = subtotal1 + percent1

  let subtotalValue = Math.floor(subtotal1)
  let percentValue = Math.floor(percent1)
  let totalValue = Math.floor(total1)

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
hisobla()