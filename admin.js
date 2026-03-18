let form = document.querySelector('.form')
let url = document.querySelector("#url")
let namee = document.querySelector('#name')
let price = document.querySelector('#price')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    localStorage.setItem('url', url.value.trim())
    localStorage.setItem('name', namee.value.trim())
    localStorage.setItem('price', price.value.trim())
    window.location.href = '/shop.html'
})