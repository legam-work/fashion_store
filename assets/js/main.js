const searchInput = document.getElementById("searchInput");
const priceFilter = document.getElementById("priceFilter");
const sortPrice = document.getElementById("sortPrice");

// ================= DATA =================
const products = [
  { 
    id: 1, 
    name: "Áo thun Unisex Tay Lỡ Mã TN BUNNY Chất Cotton Mềm Mịn Co Dãn Thoáng Mát Form Rộng", 
    price: 149000, 
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m7umz5u082v748.webp" 
  },
  { 
    id: 2, 
    name: "Váy Hai Dây VIERLIN Cúp Ngực 2 Lớp Dáng Dài Tiểu Thư", 
    price: 249000, 
    image: "https://down-vn.img.susercontent.com/file/vn-11134201-7ras8-mamyg7k9ie2p02.webp" 
  },
  { 
    id: 3, 
    name: "Áo sơ mi nữ dài tay cổ trụ phối thành cà vạt điệu đà BRIYO SM43", 
    price: 299000, 
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m4gwwn94y5zj95.webp" 
  },
  { 
    id: 4, 
    name: "Quần jean ỐNG LOE Store lưng cao tôn dáng", 
    price: 199000, 
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-miibwqe0hfcx05.webp" 
  },
  { 
    id: 5, 
    name: "Sét bộ lụa latin tay dài quần dài , tay dập ly cao cấp", 
    price: 159000, 
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0q88fr3npwt6d.webp" 
  },
  { 
    id: 6, 
    name: "Áo Thô Hàn Chấm Bi Tay Dài Xẻ, Tay Bồng Phong Cách Hoàn Quốc, Mặc Đi Làm, Đi Chơi", 
    price: 219000, 
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mfinl10hxr0t64.webp" 
  },
  { 
    id: 7, 
    name: "Bộ Gió Nhún Bồng Crotop [Phom To Thụng Dài] Chùm Dép Thời Trang Thu Đông", 
    price: 499000, 
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mffijfkeqayw7e.webp" 
  },
  { 
    id: 8, 
    name: "SOULIEE Áo Len Gấu Form Boxy Unisex Knit Bear Sweater", 
    price: 399000, 
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-miu9rcbvuvwh7a.webp" 
  },
  { 
    id: 9, 
    name: "Áo len lông thỏ hình thỏ phong cách ulzzang Hàn Quốc 24Feb Studio AK69", 
    price: 298200, 
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltxmsgcm944ff2.webp",
  },
  { 
    id: 10, 
    name: "Sét Lụa Latin Tay Dài Hàng Thiết Kế QCCC Free sz từ 40kg -60kg", 
    price: 214000, 
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-megug7ccejuv9d.webp" 
  },
  { 
    id: 11, 
    name: "Áo Dài Tết Châu Vũ , Chất Liệu Gấm Thêu Họa Tiết Dày Dặn Tông Màu Da Dễ Mặc", 
    price: 359000, 
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mgokygbs9nnz7f.webp" 
  },
  { 
    id: 12, 
    name: "Váy Yếm Nhung Nữ Viền Ren Chân Váy Phối Áo Ren Tay Loe Cổ Cao Siêu Xinh Tiểu Thư Sang Chảnh", 
    price: 460000, 
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-misbkse71a0y19.webp" 
  },
];

// ================= STATE =================
let state = { keyword: "", priceRange: "", sort: "" };

// ================= HIGHLIGHT (FIX LỖI) =================
function highlight(text, keyword) {
  if (!keyword) return text;
  const regex = new RegExp(`(${keyword})`, "gi");
  return text.replace(regex, `<mark>$1</mark>`);
}

// ================= UI =================
function ProductCard(product) {
  return `
    <div class="product">
      <img src="${product.image}">
      <h3>${highlight(product.name, state.keyword)}</h3>
      <p>${product.price.toLocaleString()}đ</p>

      <div class="product-actions">
        <button class="btn-cart" onclick="goDetail(${product.id})">Thêm vào giỏ</button>
        <button class="btn-buy" onclick="goDetail(${product.id})">Mua ngay</button>
      </div>
    </div>
  `;
}

function goDetail(id) {
  window.location.href = `product.html?id=${id}`;
}

function renderProducts(list) {
  const container = document.getElementById("product-list");
  if (!container) return;
  container.innerHTML = list.map(p => ProductCard(p)).join("");
}

// ================= FILTER =================
function applyFilters() {
  let result = [...products];

  if (state.keyword)
    result = result.filter(p =>
      p.name.toLowerCase().includes(state.keyword)
    );

  if (state.priceRange) {
    const [min, max] = state.priceRange.split("-").map(Number);
    result = result.filter(p => p.price >= min && p.price <= max);
  }

  if (state.sort === "asc") result.sort((a, b) => a.price - b.price);
  if (state.sort === "desc") result.sort((a, b) => b.price - a.price);

  renderProducts(result);
}

// ================= EVENTS =================
if (searchInput)
  searchInput.oninput = e => {
    state.keyword = e.target.value.toLowerCase();
    applyFilters();
  };

if (priceFilter)
  priceFilter.onchange = e => {
    state.priceRange = e.target.value;
    applyFilters();
  };

if (sortPrice)
  sortPrice.onchange = e => {
    state.sort = e.target.value;
    applyFilters();
  };

// ================= INIT =================
renderProducts(products);


