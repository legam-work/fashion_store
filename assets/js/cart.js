function renderCart(cart) {
  const body = document.getElementById("cart-body");
  let total = 0;

  body.innerHTML = cart.map(item => {
    total += item.price * item.quantity;
    return `
      <tr>
        <td>${item.name}</td>
        <td>${item.price.toLocaleString()}đ</td>
        <td>${item.quantity}</td>
        <td>${(item.price * item.quantity).toLocaleString()}đ</td>
        <td><button onclick="removeItem(${item.id})">X</button></td>
      </tr>
    `;
  }).join("");

  document.getElementById("total").innerText = total.toLocaleString();
}

function removeItem(id) {
  let cart = Store.getCart().filter(i => i.id !== id);
  Store.setCart(cart);
}

Store.subscribe(renderCart);
