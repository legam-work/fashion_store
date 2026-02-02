// ================= DATA =================
const products = [
  { id: 1, name: "Áo thun Unisex", price: 199000, image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m7umz5u082v748.webp" },
  { id: 2, name: "Váy hai dây", price: 249000, image: "https://down-vn.img.susercontent.com/file/vn-11134201-7ras8-mamyg7k9ie2p02.webp" },
  { id: 3, name: "Áo sơ mi nữ", price: 299000, image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m4gwwn94y5zj95.webp" }
];

// ================= STATE =================
let state = { keyword: "", priceRange: "", sort: "" };

// ================= UI =================
function ProductCard(p, keyword = "") {
  return `
    <div class="product">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>${p.price.toLocaleString()}đ</p>
      <button onclick="addToCart(${p.id})">Thêm vào giỏ</button>
    </div>
  `;
}

function renderProducts(list) {
  document.getElementById("product-list").innerHTML =
    list.map(p => ProductCard(p)).join("");
}

// ================= CART =================
function addToCart(id) {
  const cart = Store.getCart();
  const product = products.find(p => p.id === id);
  const item = cart.find(i => i.id === id);

  if (item) item.quantity++;
  else cart.push({ ...product, quantity: 1 });

  Store.setCart(cart);
  showToast("Đã thêm vào giỏ");
}

// ================= FILTER =================
function applyFilters() {
  let result = [...products];

  if (state.keyword)
    result = result.filter(p => p.name.toLowerCase().includes(state.keyword));

  if (state.priceRange) {
    const [min, max] = state.priceRange.split("-").map(Number);
    result = result.filter(p => p.price >= min && p.price <= max);
  }

  if (state.sort === "asc") result.sort((a, b) => a.price - b.price);
  if (state.sort === "desc") result.sort((a, b) => b.price - a.price);

  renderProducts(result);
}

// ================= EVENTS =================
searchInput.oninput = e => { state.keyword = e.target.value.toLowerCase(); applyFilters(); };
priceFilter.onchange = e => { state.priceRange = e.target.value; applyFilters(); };
sortPrice.onchange = e => { state.sort = e.target.value; applyFilters(); };

// ================= CART COUNT =================
Store.subscribe(cart => {
  const total = cart.reduce((s, i) => s + i.quantity, 0);
  document.getElementById("cart-count").innerText = total;
});

// ================= INIT =================
renderProducts(products);

// ================= TOAST =================
function showToast(msg) {
  const toast = document.createElement("div");
  toast.className = "toast success";
  toast.innerText = msg;
  document.getElementById("toast").appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
