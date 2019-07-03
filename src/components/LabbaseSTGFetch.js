import React from "react";

// 結果として、うまくいかなかった

const login = "labbase";
const password = "7e4930ecb9";

class LabbaseSTGFetch extends React.Component {
  onClick() {
    fetch("http://api.stg-labbase.site/v1/students/login", {
      method: "POST",
      // mode: "cros",
      Authorization: `Basic ${window.btoa(`${login}:${password}`)}`,
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: "u.str.gm@gmail.com",
        password: "Test1234"
      })
    })
      .then(res => {
        console.log("what's this");
        res.json();
      })
      .then(data => {
        console.log("success!!");
        console.log(data);
      })
      .catch(err => {
        console.log("failed!!");
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick.bind(this)}>fetch</button>
      </div>
    );
  }
}

export default LabbaseSTGFetch;
