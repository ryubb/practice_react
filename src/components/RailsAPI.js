import React from "react";
import railsClient from "../config/apiRailsClient";

class RailsAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: {},
      title: ""
    };
  }

  componentDidMount() {
    railsClient
      .get("/v1/posts", {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        const payload = res.data;
        this.setState({ titles: payload });
      });
    // fetch("http://localhost:3000/api/v1/posts", {
    //   method: "GET"
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ titles: data.data });
    //   });
  }

  fetchRails(evt) {
    evt.preventDefault();

    fetch("http://localhost:3000/v1/posts", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ titles: data.data });
      });
  }

  postRails(evt) {
    evt.preventDefault();

    const { title, titles } = this.state;
    title &&
      fetch("http://localhost:3000/api/v1/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: this.state.title })
      })
        .then(res => res.json())
        .then(
          data => (
            titles.push(data.data),
            this.setState({ titles: titles }),
            this.setState({ title: "" })
          )
        );
  }

  handleText(evt) {
    evt && this.setState({ title: evt.target.value });
  }

  render() {
    const { title, titles } = this.state;

    return (
      <React.Fragment>
        <div>
          {titles.length > 0 &&
            titles.map(title => {
              return <p key={title.id}>タイトル：{title.title}</p>;
            })}
        </div>
        <form onSubmit={evt => this.fetchRails(evt)}>
          <button value={title}>Rails API！</button>
        </form>
        <form onSubmit={evt => this.postRails(evt)}>
          <input onChange={evt => this.handleText(evt)} />
          <button>Rails POST！</button>
        </form>
      </React.Fragment>
    );
  }
}

export default RailsAPI;
