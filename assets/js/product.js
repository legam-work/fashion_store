// lấy id từ URL
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const product = products.find(p => p.id === id);
const detail = document.getElementById("detail");

if (!product) {
  detail.innerHTML = "<p>Không tìm thấy sản phẩm</p>";
} else {
  detail.innerHTML = `
    <img src="${product.image}">
    <div class="info">
      <h2>${product.name}</h2>
      <p class="price">${product.price.toLocaleString()}đ</p>

      <div class="option">
        <p>Size:</p>
        <select id="size">
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>
      </div>

      <div class="option">
        <p>Màu:</p>
        <select id="color">
          <option>Đen</option>
          <option>Trắng</option>
          <option>Be</option>
        </select>
      </div>

      <button onclick="add()">Thêm vào giỏ</button>
      <button onclick="buy()">Mua ngay</button>
    </div>
  `;
}

function add() {
  const size = document.getElementById("size").value;
  const color = document.getElementById("color").value;

  const cart = Store.getCart();
  cart.push({ ...product, size, color, quantity: 1 });
  Store.setCart(cart);

  alert("Đã thêm vào giỏ");
}

function buy() {
  add();
  window.location.href = "cart.html";
}
