let email = document.querySelector(".profile__username")
let password = document.querySelector(".profile__password")
let x = document.querySelector('.fa-x')
let admin = document.querySelector('.admin')
let aerr = document.querySelector('.admin_err')
let ul = document.querySelector('.products')
let search = document.querySelector('.header__search')
const savedEmail = localStorage.getItem("userEmail");
const savedPassword = localStorage.getItem("userPassword");

email.textContent += savedEmail
password.textContent += savedPassword

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

function addToCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []

    cart.push(products[index])

    localStorage.setItem("cart", JSON.stringify(cart))

    window.location.href = "./shopping.html"
}


function render(array) {
    ul.innerHTML = ''
    array.forEach((el, index) => {
        ul.innerHTML += `
        <div class="card">
            <img src="${el.img}">
            <h3>${el.name}</h3>
            <p class="narx">$${el.price}</p>
            <button onclick="addToCart(${index})">Buy Now</button>
        </div>
        `
    });
}

render(products)