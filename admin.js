let search = document.querySelector(".header__search")
let form = document.querySelector('.form')
let url = document.querySelector("#url")
let namee = document.querySelector('#name')
let price = document.querySelector('#price')
let ul = document.querySelector('.list-admin')
let editModal = document.querySelector(".edit-modal")
let x = document.querySelector(".fa-x")
let editForm = document.querySelector(".edit-form")
let products = JSON.parse(localStorage.getItem('products')) || []
let currentIndex = null
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
            <button onclick="editItem(${index})" class="edit"><i class="fa-solid fa-pen"></i></button>
            <button onclick="deleteItem(${index})" class="del"><i class="fa-solid fa-trash"></i></button>
        </li>
        `
    })
}

function editItem(index){
  editModal.style.display = "flex"
 currentIndex = index

  document.querySelector(".img").value = products[index].img
  document.querySelector(".title").value = products[index].name
  document.querySelector(".cost").value = products[index].price
  document.querySelector(".property").value = Object.values(products[index].details)[0]
}
x.addEventListener("click" , ()=>{
    editModal.style.display ="none"
})
document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
     editModal.style.display ="none"
    }
})
editForm.addEventListener("submit" , (e)=>{
    e.preventDefault()

    let newImg = document.querySelector(".img").value.trim()
    let newTitle = document.querySelector(".title").value.trim()
    let newPrice = document.querySelector(".cost").value.trim()
    let newBattery = document.querySelector(".property").value.trim()

    if (!(newImg && newTitle && newPrice && newBattery)) {
        iziToast.error({
            title: 'Xato!',
            message: "Bo'limlarni to'ldiring",
            position: "topRight",
            timeout: 1500
        });
        return
    }

    products[currentIndex] = {
        img: newImg,
        name: newTitle,
        price: newPrice,
        details: {
            battery: newBattery
        }
    }

    localStorage.setItem("products", JSON.stringify(products))

    render(products)
    editModal.style.display = "none"
})
function deleteItem(index) {
    products.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(products))
    render(products)
}

render(products)