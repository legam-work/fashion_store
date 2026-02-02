function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
  const cart = getCart();
  const cartBody = document.getElementById("cart-body");
  const totalPriceEl = document.getElementById("total-price");
  const totalInput = document.getElementById("total-input");

  if (!cartBody) return;

  cartBody.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <tr>
        <td colspan="5" style="padding:30px;">🛒 Giỏ hàng trống</td>
      </tr>
    `;
    totalPriceEl.innerText = "0";
    totalInput.value = 0;
    return;
  }

  cart.forEach((item, index) => {
    const sub = item.price * item.quantity;
    total += sub;

    cartBody.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.price.toLocaleString()}đ</td>
        <td>
          <div class="quantity-box">
            <button onclick="changeQty(${index}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="changeQty(${index}, 1)">+</button>
          </div>
        </td>
        <td>${sub.toLocaleString()}đ</td>
        <td><button onclick="removeItem(${index})">❌</button></td>
      </tr>
    `;
  });

  totalPriceEl.innerText = total.toLocaleString();
  totalInput.value = total;
}

function changeQty(index, delta) {
  const cart = getCart();
  cart[index].quantity += delta;
  if (cart[index].quantity < 1) cart[index].quantity = 1;
  saveCart(cart);
  renderCart();
}

function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

document.addEventListener("DOMContentLoaded", renderCart);

// DEMO CHECKOUT
const form = document.getElementById("checkout-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (getCart().length === 0) {
      alert("Giỏ hàng trống");
      return;
    }

    alert("🎉 Đặt hàng thành công (Demo đồ án)");

    localStorage.removeItem("cart");
    renderCart();

    setTimeout(() => {
      window.location.href = "index.html";
    }, 800);
  });
}
