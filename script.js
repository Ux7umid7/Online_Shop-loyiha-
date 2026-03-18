let btn = document.querySelector('.btnn')
let faSolid = document.querySelector('.a')
// let icon = document.querySelector('.header__icons')
let link = document.querySelector('a')
let links = document.querySelector('.l')
let links2 = document.querySelector('.l1')
let links3 = document.querySelector('.l2')
let fwrapper = document.querySelector(".footer__wrapper")
let products__title = document.querySelectorAll(".products__title")
let products__vision_title = document.querySelector(".products__vision-title")
let products__airpods = document.querySelector(".air")
let products__macbook = document.querySelector(".products__macbook")
let products__btn = document.querySelectorAll(".btn")
let products__vision = document.querySelector(".products__vision")
let card = document.querySelectorAll(".card")
let card__btn = document.querySelectorAll(".card__btn")
let popular__title = document.querySelectorAll(".popular__title")
let popular__item = document.querySelectorAll(".popular__item")
let header__linkshop = document.querySelectorAll(".header__link-shop")
let x = document.querySelector('.fa-x')
let admin = document.querySelector('.admin')
let aerr = document.querySelector('.admin_err')
let clear = document.querySelector('.clear')
let email = document.querySelector(".profile__username")
let password = document.querySelector(".profile__password")
let profil = document.querySelector(".profile")

const savedEmail = localStorage.getItem("userEmail");
const savedPassword = localStorage.getItem("userPassword");

email.textContent += savedEmail
password.textContent += savedPassword

admin.addEventListener('click', () => {
    if (savedPassword == '123456') {
        window.location.href = './admin.html'
    } else {
        aerr.style = 'margin-top:10px; color:red;'
        aerr.textContent = `admin parolingiz yo'q`
    }
})
clear.addEventListener('click',function(){
    localStorage.clear()
})

x.addEventListener('click', () => {
    profil.hidePopover()
})

document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        profil.hidePopover()

    }
})

btn.addEventListener('click', function () {

    faSolid.classList.toggle("fa-sun")
    faSolid.classList.toggle("fa-moon")
    btn.classList.toggle('dark-mode')


    if (btn.classList.contains("dark-mode")) {
        popular__item[3].style = "background-color:#ededed;"
        popular__title[3].style.color = 'black'
        products__btn[4].style = "color:black; border:1px solid black;"

        products__airpods.style = "background-color: #4d4d4d;"
        products__macbook.style = "background-color: #4d4d4d;"
        for (let i = 0; i < popular__title.length - 1; i++) {
            popular__title[i].style.color = 'white'
        }
        for (let i = 0; i < products__btn.length - 1; i++) {
            products__btn[i].style = "border:#fff solid 1px; color:#fff;"
        }
        for (let i = 0; i < products__title.length; i++) {
            products__title[i].style.color = "#fff"
        }
        for (let i = 0; i < card.length; i++) {
            card[i].style.backgroundColor = "#323232"
            card[i].style.color = "#ffff"
        }
        for (let i = 0; i < card__btn.length; i++) {
            card__btn[i].style.backgroundColor = "#ededed"
            card__btn[i].style.color = "#000"
        }

        document.body.style.backgroundColor = "black"
        // icon.style.color = "#ffffffbd"
        // pbtn.style.color = "#ffffffbd"
        link.style = "color:white;"
        links.style.color = "#ffffff6d"
        links2.style.color = "#ffffff6d"
        links3.style.color = "#ffffff6d"
        fwrapper.style.color = "#cfcfcf"
        products__vision.style.backgroundColor = "#b9b9b9"
        products__vision_title.style.color = "#000000"
        popular__item[2].style.backgroundColor = "#333"
        header__linkshop.style.color = "#ffffffbd"

    } else {

        products__airpods.style = "background-color: #ededed;"
        products__macbook.style = "background-color: #ededed;"
        for (let i = 0; i < popular__title.length - 1; i++) {
            popular__title[i].style.color = 'black'
        }
        for (let i = 0; i < products__btn.length - 1; i++) {
            products__btn[i].style = "color:#000; border:#000 solid 1px;"
        }

        for (let i = 0; i < products__title.length; i++) {
            products__title[i].style.color = "#000"
        }
        document.body.style.backgroundColor = "white"
        // icon.style.color = "#000000bd"

        // pbtn.style.color = "#000000bd"
        link.style = "color:#000;"
        links.style.color = "#0000006d"
        links2.style.color = "#0000006d"
        links3.style.color = "#0000006d"
        fwrapper.style.color = "#646464"
        products__vision.style.backgroundColor = "#353535"
        products__vision_title.style.color = "#ffffff"
        for (let i = 0; i < card.length; i++) {
            card[i].style.backgroundColor = "#ededed"
            card[i].style.color = "#000"

        }
        for (let i = 0; i < card__btn.length; i++) {
            card__btn[i].style.backgroundColor = "#000"
            card__btn[i].style.color = "#ffff"
        }

        popular__item[2].style.backgroundColor = "#EAEAEA"
        popular__item[3].style = "background-color:#2C2C2C;"
        popular__title[3].style.color = 'white'
        products__btn[4].style = "color:white; border:1px solid white;"
        header__linkshop.style.color = "#000000bd"

    }

})

