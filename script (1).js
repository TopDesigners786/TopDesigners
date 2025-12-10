const products = [
  { id: 1, name: "TopDesigners Hoodie", price: 60 },
  { id: 2, name: "TopDesigners Oversized Tee", price: 32 },
  { id: 3, name: "TopDesigners Track Pants", price: 48 },
  { id: 4, name: "TopDesigners Sports Jacket", price: 75 }
];

const cart = [];
const productsDiv = document.getElementById("products");
const cartList = document.getElementById("cart");
const totalEl = document.getElementById("total");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <h3>${p.name}</h3>
    <p class="price">£${p.price}</p>
    <button onclick='addToCart(${p.id})'>Add to Cart</button>
  `;
  productsDiv.appendChild(div);
});

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - £${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });
  totalEl.textContent = total;
}

function checkout() {
  alert("Checkout is currently in demo mode. Payments will be activated later.");
}
