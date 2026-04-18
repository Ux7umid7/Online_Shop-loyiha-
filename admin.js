let search = document.querySelector(".header__search")
let form = document.querySelector('.form')
let url = document.querySelector("#url")
let namee = document.querySelector('#name')
let price = document.querySelector('#price')
let ul = document.querySelector('.list-admin')


let products = JSON.parse(localStorage.getItem('products')) || []

form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (!(url.value.trim() && namee.value.trim() && price.value.trim())) {
        iziToast.error({
            title: 'Xato!',
            message: "Bo'limlarni toldiring",
            position: "topRight",
            timeout: 1500
        });
        return
    }
    let newProduct = {
        img: url.value.trim(),
        name: namee.value.trim(),
        price: price.value.trim()
    }

    products.push(newProduct)

    localStorage.setItem("products", JSON.stringify(products))

    render(products)
    url.value = ""
    namee.value = ""
    price.value = ""

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
        <li class="card">
            <img src="${el.img}">
            <h3>${el.name}</h3>
            <p class="narx">$${el.price}</p>
            <button onclick="deleteItem(${index})" class="del"><i class="fa-solid fa-trash"></i></button>
        </li>
        `
    })
}

function deleteItem(index) {
    products.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(products))
    render(products)
}

render(products)