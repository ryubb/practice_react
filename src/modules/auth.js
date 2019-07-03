class Auth {
  static login(token) {
    localStorage.setItem("token", token);
  }

  static isLoggedIn() {
    return localStorage.getItem("token") !== null;
  }

  static logout() {
    localStorage.removeItem("token");
  }

  static getToken() {
    localStorage.getItem("token");
  }
}

export default Auth;
