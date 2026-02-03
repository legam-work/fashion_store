const Auth = {
  register(username, password) {
    // chỉ lưu 1 account demo
    const account = {
      username,
      password
    };
    localStorage.setItem("account", JSON.stringify(account));
    return true;
  },

  login(username, password) {
    const acc = JSON.parse(localStorage.getItem("account"));
    if (!acc) return false;

    return acc.username === username && acc.password === password;
  },

  setUser(username) {
    localStorage.setItem("user", username);
  },

  getUser() {
    return localStorage.getItem("user");
  },

  logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
  }
};
