import React from "react";
import ReactDOM from "react-dom";
import styled from "react-emotion";
// import styled from "styled-components";

const CustomDiv = styled("div")`
  margin-top: 100px;
`;

const CustomDiv1 = styled("input")`
  margin-top: 100px;
`;

const CustomDiv2 = styled("div")`
  margin-top: 100px;
`;

class UseRefTextInput extends React.Component {
  constructor(props) {
    super(props);
    // textInput DOM 要素を保持するための ref を作成します。
    this.textInput = React.createRef();
    // this.focusTextInput = this.focusTextInput.bind(this);
    this.test = React.createRef();
  }

  // onClick() {
  // 生の DOM API を使用して明示的にテキストの入力にフォーカスします。
  // 補足：DOM ノードを取得するために "current" にアクセスしています。
  // this.textInput.current.focus();
  // const node = this.textInput.current;
  // const node = this.textInput.current;
  // const node_test = this.test.current;
  // console.log(node.offsetTop);
  // console.log(node_test.offsetTop);
  // const test = React.findDOMNode(this.refs.command).id;
  // console.log(test);
  // }

  onClick() {
    // ref=alphaの要素を取得・操作する
    let alpha = this.refs.alpha; // React backing instance
    let alphaDOM = ReactDOM.findDOMNode(alpha); // HTML Elem
    // let $alpha = $(alphaDOM); // jQuery obj
    // $alpha.html("ALPHA");
    console.log(alphaDOM);
  }

  render() {
    // コンストラクタで作成した `textInput` に <input> ref を関連付けることを
    // React に伝えます。

    return (
      <CustomDiv>
        <input type="text" ref="alpha" />
        <CustomDiv1 type="text" id="id" ref="alpha" />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.onClick.bind(this)}
        />

        {/* <CustomDiv2 ref={this.test}>test2</CustomDiv2> */}
      </CustomDiv>
    );
  }
}

export default UseRefTextInput;
