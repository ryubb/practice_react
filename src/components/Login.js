import React from "react";
import auth from "../modules/auth";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailInput(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordInput(e) {
    this.setState({ password: e.target.value });
  }

  login() {
    fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          auth.login(data.token);
        } else {
          alert(data.message);
        }
      })
      .catch(err => err);
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <div>
          <label>Email</label>
          <input
            value={this.state.email}
            onChange={this.handleEmailInput.bind(this)}
            placeholder="Email"
          />
        </div>
        <div>
          <label>Pasword</label>
          <input
            value={this.state.password}
            onChange={this.handlePasswordInput.bind(this)}
            placeholder="Email"
          />
          <button onClick={this.login.bind(this)}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
