import React from "react";
import styled from "react-emotion";

const Wrapper = styled("div")`
  width: 400px;
  height: 400px;
  background-color: pink;
`;

const Click = styled("div")`
  width: 100px;
  height: 100px;
  background-color: red;
`;

class BubbleEvent extends React.Component {
  clickWrapper(e) {
    console.log(e.eventPhase);
    console.log("wrapper");
  }

  onClick(e) {
    e.stopPropagation();
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
    console.log("click");
  }

  render() {
    return (
      <Wrapper onClick={e => this.clickWrapper(e)}>
        <Click onClick={e => this.onClick(e)}>this click</Click>
      </Wrapper>
    );
  }
}

export default BubbleEvent;
