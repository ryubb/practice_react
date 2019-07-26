import React from "react";
import styled from "styled-components";

class Generator extends React.Component {
  onClick() {
    function* gfn() {
      alert("こんにちは！");
      yield;
      alert("良い天気ですね。");
      yield;
      alert("さようなら！");
    }
    let g;
    g = gfn();
    g.next();
  }

  render() {
    return (
      <div>
        <p>Generator</p>
        <button onClick={() => this.onClick()}>click</button>
      </div>
    );
  }
}

export default Generator;
