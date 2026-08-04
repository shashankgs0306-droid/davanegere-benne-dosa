// Smooth scrolling navigation

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});




// Header shadow on scroll

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.3)";

    }

    else{

        header.style.boxShadow="none";

    }

});




// Welcome animation

window.addEventListener("load",()=>{

    document.querySelector(".hero-content")
    .style.transform="translateY(0)";

});

// ==========================
// SHOPPING CART
// ==========================

let cart = [];

const buttons = document.querySelectorAll(".add-cart");
const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");
const checkout = document.getElementById("checkout");

// Add item to cart
buttons.forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.qty++;
        } else {
            cart.push({
                name: name,
                price: price,
                qty: 1
            });
        }

        updateCart();

    });

});

// Update cart display
function updateCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        total.innerText = "0";
        return;

    }

    let totalPrice = 0;

    cart.forEach(item => {

        totalPrice += item.price * item.qty;

        const row = document.createElement("div");
        row.className = "cart-item";

        row.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                ₹${item.price} × ${item.qty}
            </div>

            <div>
                <button onclick="changeQty('${item.name}', -1)">−</button>
                <button onclick="changeQty('${item.name}', 1)">+</button>
            </div>
        `;

        cartItems.appendChild(row);

    });

    total.innerText = totalPrice;

}

// Increase / Decrease quantity
function changeQty(name, change) {

    const item = cart.find(i => i.name === name);

    if (!item) return;

    item.qty += change;

    if (item.qty <= 0) {
        cart = cart.filter(i => i.name !== name);
    }

    updateCart();

}

// Checkout button
checkout.addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert("Checkout page will be added in the next step!");

});
