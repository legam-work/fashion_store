// ================= DATA =================
const products = [
  {
    id: 1,
    name: "Áo thun Unisex Tay Lỡ Mã TN BUNNY Chất Cotton Mềm Mịn Co Dãn Thoáng Mát Form Rộng",
    price: 149000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m7umz5u082v748.webp",
    description:
      "Áo thun unisex form rộng, chất cotton mềm mịn, co giãn tốt, thoáng mát, phù hợp đi học, đi chơi.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Trắng", "Đen", "Be", "Ghi", "Xanh Lá", "Xanh Dương", "Đỏ", "Hồng"]
  },
  {
    id: 2,
    name: "Váy Hai Dây VIERLIN Cúp Ngực 2 Lớp Dáng Dài Tiểu Thư",
    price: 249000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134201-7ras8-mamyg7k9ie2p02.webp",
    description:
      "Váy lụa Vierlin được thiết kế và gia công trực tiếp bởi thương hiệu VIERLIN, chất vải mềm mại, form chuẩn theo size , hình ảnh thật 100% đúng như mô tả sản phẩm.",
    sizes: ["XS","S", "M", "L"],
    colors: ["Trắng", "Đen","Kem", "Xanh Dương"]
  },
  {
    id: 3,
    name: "Áo sơ mi nữ dài tay cổ trụ phối thành cà vạt điệu đà BRIYO SM43",
    price: 299000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m4gwwn94y5zj95.webp",
    description:
      "Áo sơ mi nữ dài tay cổ trụ BRIYO SM43 là sự kết hợp hoàn hảo giữa phong cách và sự tinh tế. Cổ trụ phối thành cà vạt điệu đà, tạo nên nét xinh xắn và mới lạ.  Đảm bảo thoải mái suốt cả ngày dài. Sản phẩm thích hợp cho nhiều dịp khác nhau, mang lại vẻ đẹp thanh lịch cho người mặc.",
    sizes: ["S", "M", "L"],
    colors: ["Trắng Tinh", "Kẻ Xanh"]
  },
  {
    id: 4,
    name: "Quần jean ỐNG LOE Store lưng cao tôn dáng",
    price: 199000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-miibwqe0hfcx05.webp",
    description:
      "Quần jeans trắng trơn ống suông, Jeans dày dặn, bền đẹp, nhưng vẫn mang lại cảm giác thoải mái. Độ rộng ống quần từ 30-32cm, Phù hợp với mọi dáng người, giúp che khuyết điểm đôi chân.Hơi loe nhẹ bên dưới ống. Chiều dài quần từ 100-104cm, giúp kéo dài tỷ lệ đôi chân và tạo sự ấn tượng cho set đồ. Thiết kế cạp cao ôm sát vòng eo, tôn dáng và giúp tạo hiệu ứng kéo dài chân. ",
    sizes: ["S", "M", "L"],
    colors: ["Trắng", "Be"]
    },
  {
    id: 5,
    name: "Sét bộ lụa latin tay dài quần dài , tay dập ly cao cấp",
    price: 159000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0q88fr3npwt6d.webp",
    description:
      "Hàng chuẩn từng đường kim mũi k xù, không nhăn, không phai màu. Chất lụa mango loại mềm mát, mướt mặc mịn sướng. Không so sánh với hàng satin bóng giá rẻ thô hơn mango rất nhiều. Quần chun co giãn, có túi, size thường 49-60kg, bigsize 60-75kg ib shop để được tư vấn mẫu mã và size. Phù hợp mặc ở nhà, đi chợ, bộ mặc sau sinh mặc ở cữ.",
    sizes: ["S", "M", "L"],
    colors: ["Trắng", "Đen","Be", "Xanh Dương", "Hồng", "Đỏ",]
  },
  {
    id: 6,
    name: "Áo Thô Hàn Chấm Bi Tay Dài Xẻ, Tay Bồng Phong Cách Hoàn Quốc, Mặc Đi Làm, Đi Chơi",
    price: 219000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mfinl10hxr0t64.webp",
    description:
      "",
    sizes: ["S", "M",],
    colors: ["Trắng", "Đen",]
  },
  {
    id: 7,
    name: "Bộ Gió Nhún Bồng Crotop [Phom To Thụng Dài] Chùm Dép Thời Trang Thu Đông",
    price: 499000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mffijfkeqayw7e.webp",
    description:
      "Bộ gió nhún bồng Crotop với phom to thụng dài, mang đến vẻ ngoài thời trang. Chùm dép thời trang thu đông 2025, phù hợp cho những ai yêu thích phong cách mới mẻ. Phom to thụng dài, tạo nên sự thoải mái khi mặc. Bộ gió nhún bồng Crotop là lựa chọn hoàn hảo cho những ai muốn cập nhật xu hướng thời trang thu đông 2025.",
    sizes: ["XS","S", "M", "L"],
    colors: ["Đen","Đỏ Đô",]
  },
  {
    id: 8,
    name: "SOULIEE Áo Len Gấu Form Boxy Unisex Knit Bear Sweater",
    price: 399000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-miu9rcbvuvwh7a.webp",
    description:
      "SOULIEE Áo Len Gấu Form Boxy Unisex Knit Bear Sweater. Mỗi đơn hàng sẽ được tặng kèm 1 túi vải brand 🛍️. Len cotton mềm mịn, thoải mái. Thiết kế trái tim và gấu được dệt trực tiếp lên mặt trước và hai cánh tay áo. Mặt sau được dệt chữ Souliee Soft W Luv. Form boxy unisex phù hợp nam & nữ.",
    sizes: ["M", "L"],
    colors: ["Đen"]
  },
  {
    id: 9,
    name: "Áo len lông thỏ hình thỏ phong cách ulzzang Hàn Quốc 24Feb Studio AK69",
    price: 359500,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltxmsgcm944ff2.webp",
    description:
      "Áo len lông thỏ hình thỏ phong cách ulzzang Hàn Quốc. Mã len lông thỏ mịn mềm mại, co giãn nhẹ. ",
    sizes: ["free size"],
    colors: ["Be"]
  },
  {
    id: 10,
    name: "Sét Lụa Latin Tay Dài Hàng Thiết Kế QCCC Free sz từ 40kg -60kg",
    price: 214900,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-megug7ccejuv9d.webp",
    description:
      "Thiết kế theo phong cách truyền thống kết hợp họa tiết đơn giản, dễ thương phù hợp với xu hướng hiện nay. Ở nhà hay đi trà sữa đều đẹp. Đường may tỉ mỹ , chỉnh chu. Chất liệu cao cấp, mặc cực mát, màu sắc đa dạng. Chất lượng tốt, giá cả phù hợp.",
    sizes: ["free size từ 40kg-60kg"],
    colors: ["Trắng", "Đen","Đỏ", "Hồng", "Xám"]
  },
  {
    id: 11,
    name: "Áo Dài Tết Châu Vũ , Chất Liệu Gấm Thêu Họa Tiết Dày Dặn Tông Màu Da Dễ Mặc",
    price: 359000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mgokygbs9nnz7f.webp.",
    description:
      " Quý khách mặc không vừa nhà ANN sẽ hỗ trợ đổi size sản phẩm. Sản phẩm nhận đổi trả là sản phẩm còn nguyên tem mác, chưa chỉnh sửa, chưa qua giặt giũ.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Cả Bộ (quần cốm)","Cả Bộ (quần da)", "Cả Bộ (quần đỏ đô)","Cả Bộ (quần hồng đỗ)", "Cả Bộ (quần hồng nhạt)", "Cả Bộ (quần trắng)", "Lẻ Áo"]
  },
  {
    id: 12,
    name: "Váy Yếm Nhung Nữ Viền Ren Chân Váy Phối Áo Ren Tay Loe Cổ Cao Siêu Xinh Tiểu Thư Sang Chảnh",
    price: 460000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-misbkse71a0y19.webp",
    description:
      "Đẩm váy nữ dáng dài thiết kế sát nách chiết eo phối chân váy A mix voan lưới sang trọng. ",
    sizes: ["S", "M", "L"],
    colors: ["Đen"]
  },
];

// ================= HELPER =================
function getQueryId() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}

// ================= RENDER =================
function renderProductDetail(product) {
  const app = document.getElementById("product-detail");

  app.innerHTML = `
    <div class="product-detail">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="product-info">
        <h1 class="product-name" style="padding: 20px 0;">${product.name}</h1>

        <p class="product-desc" >
          ${product.description}
        </p>

        <p class="product-price" style="color: red; padding: 20px 0;">
          ${product.price.toLocaleString()}đ
        </p>

        <div class="options">
          <label style="padding: 0 15px;">
            Size:
            <select id="sizeSelect">
              <option value="">-- Chọn size --</option>
              ${product.sizes
                .map(size => `<option value="${size}">${size}</option>`)
                .join("")}
            </select>
          </label>

          <label>
            Màu:
            <select id="colorSelect">
              <option value="">-- Chọn màu --</option>
              ${product.colors
                .map(color => `<option value="${color}">${color}</option>`)
                .join("")}
            </select>
          </label>
        </div>

        <div class="actions" style="padding: 35px 0;">
          <button onclick="addToCart(${product.id})">
            Thêm vào giỏ
          </button>
          <button onclick="buyNow(${product.id})">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  `;
}

// ================= CART =================
function addToCart(id) {
  const size = document.getElementById("sizeSelect").value;
  const color = document.getElementById("colorSelect").value;

  if (!size || !color) {
    alert("Vui lòng chọn size và màu");
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);

  cart.push({
    ...product,
    size,
    color,
    quantity: 1
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ hàng");
}

function buyNow(id) {
  addToCart(id);
  window.location.href = "cart.html";
}

// ================= INIT =================
const productId = getQueryId();
const product = products.find(p => p.id === productId);

if (!product) {
  document.getElementById("product-detail").innerHTML =
    "<p>Không tìm thấy sản phẩm</p>";
} else {
  renderProductDetail(product);
}
