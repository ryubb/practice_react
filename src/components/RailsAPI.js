import React from "react";
// import client from "../config/apiClient";

class RailsAPI extends React.Component {
  fetchRails() {
    fetch("http://localhost:3000/api/v1/posts", {
      method: "GET"
    }).then(res => console.log(res));
  }

  postRails() {
    fetch("http://localhost:3000/api/v1/posts", {
      method: "POSt",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: "テストPOST" })
    }).then(res => console.log(res));
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.fetchRails()}>Rails API！</button>
        <button onClick={() => this.postRails()}>Rails POST！</button>
      </React.Fragment>
    );
  }
}

export default RailsAPI;
