// ================== DATA ==================
const products = [
  {
    id: 1,
    name: "Áo Thun, Áo Phông Unisex Tay Lỡ CARADLA Mã TN BUNNY Chất Cotton Mềm Mịn Co Dãn Thoáng Mát Form Rộng",
    price: 199000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m7umz5u082v748.webp"
  },
  {
    id: 2,
    name: "Váy Hai Dây VIERLIN Cúp Ngực 2 Lớp Nhiều Ly Dáng Dài Tiểu Thư",
    price: 249000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134201-7ras8-mamyg7k9ie2p02.webp"
  },
  {
    id: 3,
    name: "Áo sơ mi nữ dài tay cổ trụ phối thành cà vạt điệu đà",
    price: 299000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m4gwwn94y5zj95.webp"
  },
  {
    id: 4,
    name: "Quần Jean Ống Rộng 37cm MIAA Màu Retro Cạp Cao Siêu Tôn Dáng",
    price: 359000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mi3yy1z6pmgz72.webp"
  },
  {
    id: 5,
    name: "Đầm nhung nữ cổ sen tiểu thư dáng bồng xòe",
    price: 399000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1z26wvvv4ija2.webp"
  },
  {
    id: 6,
    name: "Zinna Set Bộ Áo Dạ Dáng Lửng Mix Quần Sooc Dạ Sang Chảnh",
    price: 499000,
    image: "https://down-vn.img.susercontent.com/file/sg-11134201-821f5-mgnivnjwc07f5d.webp"
  },
  {
    id: 7,
    name: "Áo Khoác Da Trơn Cúc Đôi Form Rộng Bo Chun Viền Gấu Phong Cách Hàn Quốc",
    price: 219000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-meyex9jcu5mtaa.webp"
  },
  {
    id: 8,
    name: "Áo dài TÂM GIAO, cách tân dáng suông vải gấm lụa thanh trúc đính kết thủ công cao cấp",
    price: 349000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mhtymhkf09ome7.webp"
  },
  {
    id: 9,
    name: "Quần jean ỐNG LOE 247Store nhiều màu lưng cao tôn dáng dài 103cm đi học đi làm đi chơi Back to School",
    price: 269000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-miibwqe0hfcx05.webp"
  },
  {
    id: 10,
    name: "TREETURE Áo Thun Tay Dài Của Phụ Nữ Áo Thun Ôm Body Áo Thun Trơn Cổ Tròn Ren Thời Trang Mới Bó Sát",
    price: 119000,
    image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rfhp-m3z40iday4eg84.webp"
  },
];

// ================== STATE ==================
let state = {
  keyword: "",
  priceRange: "",
  sort: ""
};

// ================== CART UTILS ==================
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// ================== UI UTILS ==================
function highlight(text, keyword) {
  if (!keyword) return text;
  const reg = new RegExp(`(${keyword})`, "gi");
  return text.replace(reg, `<mark>$1</mark>`);
}

// ================== COMPONENTS ==================
function ProductCard(product, keyword = "") {
  return `
    <div class="product">
      <img src="${product.image}">
      <h3>${highlight(product.name, keyword)}</h3>
      <p class="price">${product.price.toLocaleString()}đ</p>
      <button onclick="addToCart(${product.id})">
        Thêm vào giỏ
      </button>
    </div>
  `;
}

function ProductList(list, keyword = "") {
  if (list.length === 0) {
    return `<p>Không tìm thấy sản phẩm</p>`;
  }

  return list.map(p => ProductCard(p, keyword)).join("");
}

// ================== RENDER ==================
function renderProducts(listData, keyword = "") {
  const container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = ProductList(listData, keyword);
}

// ================== FILTER + SORT ==================
function applyFilters() {
  let result = [...products];

  // SEARCH
  if (state.keyword) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(state.keyword)
    );
  }

  // FILTER PRICE
  if (state.priceRange) {
    const [min, max] = state.priceRange.split("-").map(Number);
    result = result.filter(p => p.price >= min && p.price <= max);
  }

  // SORT
  if (state.sort === "asc") {
    result.sort((a, b) => a.price - b.price);
  } else if (state.sort === "desc") {
    result.sort((a, b) => b.price - a.price);
  }

  renderProducts(result, state.keyword);
}

// ================== CART ==================
function addToCart(id) {
  const cart = getCart();
  const product = products.find(p => p.id === id);
  const item = cart.find(i => i.id === id);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  showToast("🛒 Đã thêm vào giỏ");

}

function updateCartCount() {
  const cart = getCart();
  const total = cart.reduce((sum, i) => sum + i.quantity, 0);
  const el = document.getElementById("cart-count");
  if (el) el.innerText = total;
}

// ================== EVENTS ==================
const searchInput = document.getElementById("searchInput");
const priceFilter = document.getElementById("priceFilter");
const sortPrice = document.getElementById("sortPrice");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    state.keyword = this.value.trim().toLowerCase();
    applyFilters();
  });
}

if (priceFilter) {
  priceFilter.addEventListener("change", function () {
    state.priceRange = this.value;
    applyFilters();
  });
}

if (sortPrice) {
  sortPrice.addEventListener("change", function () {
    state.sort = this.value;
    applyFilters();
  });
}

// ================== INIT ==================
renderProducts(products);
updateCartCount();

function showToast(message, type = "success") {
  const toastBox = document.getElementById("toast");
  if (!toastBox) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerText = message;

  toastBox.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

