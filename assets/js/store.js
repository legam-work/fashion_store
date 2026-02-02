const Store = {
  getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  },

  setCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    this.notify();
  },

  listeners: [],

  subscribe(fn) {
    this.listeners.push(fn);
    fn(this.getCart());
  },

  notify() {
    this.listeners.forEach(fn => fn(this.getCart()));
  }
};
