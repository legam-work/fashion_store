document.getElementById("checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Giỏ hàng trống!");
    return;
  }

  alert("Đặt hàng thành công 🎉");

  localStorage.removeItem("cart");
  window.location.href = "index.html";
});
