// ================== CART UTILS ==================
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ================== RENDER GIỎ HÀNG ==================
function renderCart() {
  const cart = getCart();

  const cartBody = document.getElementById("cart-body");
  const totalPriceEl = document.getElementById("total-price");
  const totalInput = document.getElementById("total-input");

  if (!cartBody) return;

  cartBody.innerHTML = "";
  let total = 0;

  // 🛒 Giỏ hàng trống
  if (cart.length === 0) {
    cartBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; padding:30px;">
          🛒 Giỏ hàng trống
        </td>
      </tr>
    `;
    if (totalPriceEl) totalPriceEl.innerText = "0";
    if (totalInput) totalInput.value = 0;
    return;
  }

  cart.forEach((item, index) => {
    const subTotal = item.price * item.quantity;
    total += subTotal;

    cartBody.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.price.toLocaleString()}đ</td>
        <td>
          <div class="quantity-box">
            <button onclick="changeQty(${index}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="changeQty(${index}, 1)">+</button>
          </div>
        </td>
        <td>${subTotal.toLocaleString()}đ</td>
        <td>
          <button onclick="removeItem(${index})">❌</button>
        </td>
      </tr>
    `;
  });

  if (totalPriceEl) totalPriceEl.innerText = total.toLocaleString();
  if (totalInput) totalInput.value = total;
}

// ================== THAY ĐỔI SỐ LƯỢNG ==================
function changeQty(index, delta) {
  const cart = getCart();

  cart[index].quantity += delta;
  if (cart[index].quantity < 1) cart[index].quantity = 1;

  saveCart(cart);
  renderCart();
}

// ================== XOÁ SẢN PHẨM ==================
function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

// ================== INIT ==================
document.addEventListener("DOMContentLoaded", renderCart);

// ================== ĐẶT HÀNG ==================
const form = document.getElementById("checkout-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const cart = getCart();
    if (cart.length === 0) {
      alert("Giỏ hàng trống");
      return;
    }

    const data = {
      name: form.querySelector('[name="name"]').value,
      phone: form.querySelector('[name="phone"]').value,
      address: form.querySelector('[name="address"]').value,
      total: document.getElementById("total-input").value
    };

    fetch("/MY/study/fashion_store/includes/ajax_checkout.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === "success") {
          alert("🎉 Đặt hàng thành công!");

          // 🔥 XÓA GIỎ HÀNG
          localStorage.removeItem("cart");
          renderCart();

          setTimeout(() => {
            window.location.href = "index.php";
          }, 800);
        } else {
          alert("Có lỗi khi đặt hàng");
        }
      })
      .catch(() => {
        alert("Không kết nối được server");
      });
  });
}
