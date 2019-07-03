import React from "react";
// import styled from "react-emotion";

const Post = ({ title, author, children, titleRender }) => {
  console.log(children);
  return (
    <div>
      <div>{titleRender({ title, author })}</div>
      <div>{children}</div>
    </div>
  );
};

const Children = () => (
  <Post
    author="bob"
    title="hoge"
    titleRender={({ author, title }) => (
      <div>
        {title} ({author}さんが書きまいした)
      </div>
    )}
  >
    <div>子供やで</div>
  </Post>
);

export default Children;
