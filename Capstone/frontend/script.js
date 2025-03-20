// Product Data (You can replace this with a JSON file)
const products = [
    { id: 1, name: "Dumbbell Set", price: 50, image: "images/dumbbell.jpg" },
    { id: 2, name: "Yoga Mat", price: 20, image: "images/yoga-mat.jpg" },
    { id: 3, name: "Protein Powder", price: 30, image: "images/protein.jpg" }
];

const productContainer = document.querySelector(".product-container");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let cart = [];

// Display Products
function displayProducts() {
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(div);
    });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Update Cart
function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((product, index) => {
        total += product.price;
        const div = document.createElement("div");
        div.innerHTML = `
            <p>${product.name} - $${product.price} <button onclick="removeFromCart(${index})">Remove</button></p>
        `;
        cartItems.appendChild(div);
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total;
}

// Remove from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Checkout Button
document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
});

// Load Products
displayProducts();
