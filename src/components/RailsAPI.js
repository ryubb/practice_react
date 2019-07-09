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
    this.getPosts();
  }

  fetchRails(evt) {
    evt.preventDefault();
    this.getPosts();
  }

  postRails(evt) {
    evt.preventDefault();

    const { title, titles } = this.state;
    const postData = { title: title };
    railsClient.post("/v1/posts", postData).then(res => {
      const payload = res.data;
      this.setState({ titles: payload.data });
      this.setState({ title: "" });
    });
  }

  handleText(evt) {
    evt && this.setState({ title: evt.target.value });
  }

  getPosts() {
    railsClient
      .get("/v1/posts", {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        const payload = res.data;
        this.setState({ titles: payload.data });
      });
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
