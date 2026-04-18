let email = document.querySelector(".profile__username")
let password = document.querySelector(".profile__password")
let x = document.querySelector('.fa-x')
let admin = document.querySelector('.admin')
let aerr = document.querySelector('.admin_err')
let ul = document.querySelector('.products')
let search = document.querySelector('.header__search')
let cart_icon = document.querySelector(".header__link-shop")

let form = document.querySelector(".form")
let samsung = document.querySelector("#samsung")
let apple = document.querySelector("#apple")
let cheap = document.querySelector("#cheap")
let ex = document.querySelector("#ex")

const savedEmail = localStorage.getItem("userEmail");
const savedPassword = localStorage.getItem("userPassword");

email.textContent += savedEmail
password.textContent += savedPassword

let cart_num = document.querySelector(".cart__num")
let cartget = JSON.parse(localStorage.getItem("cart")) || []
// 
// 
// 
form.addEventListener("change", () => {
    let filtered = products.filter((el) => {

        let brand =
            (samsung.checked && el.name.toLowerCase().includes("samsung")) ||
            (apple.checked && el.name.toLowerCase().includes("apple")) ||
            (!samsung.checked && !apple.checked)

        let price =
            (cheap.checked && el.price < 500) ||
            (ex.checked && el.price >= 500) ||
            (!cheap.checked && !ex.checked)

        return brand && price
    })

    render(filtered)
})
samsung.addEventListener("change", () => {
    if (samsung.checked) apple.checked = false
})

apple.addEventListener("change", () => {
    if (apple.checked) samsung.checked = false
})
cheap.addEventListener("change", () => {
    if (cheap.checked) ex.checked = false
})

ex.addEventListener("change", () => {
    if (ex.checked) cheap.checked = false
})

cart_num.textContent = cartget.length
if (cartget.length <= 0) {
    cart_num.style.backgroundColor = "red"
} else {
    cart_num.style.backgroundColor = "blue"
}
cart_icon.addEventListener("click", () => {
    if (cartget.length <= 0) {
        window.location.href = "/shop.html"
    } else {
        window.location.href = "/shopping.html"
    }
})
x.addEventListener('click', () => {
    profil.hidePopover()
})

document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        profil.hidePopover()

    }
})

admin.addEventListener('click', () => {
    if (savedPassword == '123456') {
        window.location.href = './admin.html'
    } else {
        aerr.style = 'margin-top:10px; color:red;'
        aerr.textContent = `admin parolingiz yo'q`
    }
})



search.addEventListener('input', () => {
    let filtered = []
    products.filter((el) => {
        if (((String(el.name)).toLowerCase()).includes((search.value).toLowerCase())) {
            filtered.push(el)
        }
    })
    ul.innerHTML = ''
    render(filtered)
})



function render(array) {
    ul.innerHTML = ''
    array.forEach((el, index) => {
        ul.innerHTML += `
        <div class="card">
            <img src="${el.img}">
            <h3>${el.name}</h3>
            <p class="narx">$${el.price}</p>
            <a href="property.html?name=${el.name}">See Now</a>
        </div>
        `
    });
}

render(products)