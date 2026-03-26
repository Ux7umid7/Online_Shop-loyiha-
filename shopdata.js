let products = [
    {
        img: "./assets/Iphone 14 pro 1 (1).png",
        name: "Apple iPhone 14 Pro 512GB Gold",
        price: 1437
    },
    {
        img: "./assets/Iphone 14 pro 1 (2).png",
        name: "Apple iPhone 11 128GB White",
        price: 510
    },
    {
        img: "./assets/Iphone 14 pro 1 (3).png",
        name: "Apple iPhone 11 128GB White",
        price: 550
    },
    {
        img: "./assets/Iphone 14 pro 1 (4).png",
        name: "Apple iPhone 14 Pro 1TB Gold",
        price: 1499
    },
    {
        img: "./assets/Iphone 14 pro 1 (5).png",
        name: "Apple iPhone 14 Pro 1TB Gold",
        price: 1399
    },
    {
        img: "./assets/Iphone 14 pro 1 (6).png",
        name: "Apple iPhone 14 Pro 128GB Deep Purple",
        price: 1600
    },
    {
        img: "./assets/Iphone 14 pro 1 (7).png",
        name: "Apple iPhone 13 mini 128GB Pink",
        price: 850
    },
    {
        img: "./assets/Iphone 14 pro 1 (8).png",
        name: "Camera Space Black",
        price: 1399
    },
    {
        img: "./assets/Iphone 14 pro 1 (9).png",
        name: "Apple iWatch Pro Silver",
        price: 1399
    }
];

let productsget = JSON.parse(localStorage.getItem('products'))

if (productsget && productsget.length > 9) {
    products = productsget
}

let urlget = localStorage.getItem('url')
let nameeget = localStorage.getItem('name')
let priceget = localStorage.getItem('price')
if (urlget && nameeget && priceget) {
    if (urlget != products[products.length - 1].img || nameeget != products[products.length - 1].name || priceget != products[products.length - 1].price) {
        products.push(
            {
                img: urlget,
                name: nameeget,
                price: priceget
            }
        )
        localStorage.setItem('products', JSON.stringify(products))
    }
}

