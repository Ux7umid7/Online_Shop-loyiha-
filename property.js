let right = document.querySelector(".right")
let left = document.querySelector(".left")
let det = document.querySelector("#details")

let path = new URLSearchParams(window.location.search)
let namee = path.get('name')

let product = {}
let data = products

for (i = 0; i < data.length; i++) {
    if (data[i].name == namee) {
        product = data[i]
    }
}
console.log(product.name);

function render(pr) {
    right.innerHTML = `
<h1 class="name">${pr.name}</h1>
<div class="price-box"> <strong>Price:</strong>
<p class="price"> $${pr.price}</p>
</div>
<button class="add" onclick="addToCart()">Add to Cart</button>
`
    left.innerHTML = `
<img src="${pr.img}" alt="" class="img">
`
    det.innerHTML = `
    <h2 class="title-a">Availability</h2>
    <ul class = "avail">
        <li>Free delivery: 1–2 days</li>
        <li>In stock: Today</li>
        <li>Warranty: 1 year</li>
    </ul>
    <hr>
    <h2 class="title-b">Details</h2>
    <ul class="details-list">
        ${Object.entries(pr.details || {})
            .map(([key, value]) => {
                if (key === "extras") return "";
                return `<li>${value ?? "—"}</li>`;
            })
            .join("")}
<hr>
        ${pr.details?.extras
            ? `<li><b>Extras:</b></li>` +
            pr.details.extras.map(e => `<li>• ${e}</li>`).join("")
            : ""}
    </ul>
`;

}

function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || []

    cart.push(product)

    localStorage.setItem("cart", JSON.stringify(cart))

    window.location.href = "./shopping.html"
}
render(product)