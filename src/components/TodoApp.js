import React from "react";
import styled from "styled-components";

import railsClient from "../config/apiRailsClient";
import { Card } from "@material-ui/core";

class RailsAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: {},
      title: "",
      content: "",
      label: ""
    };
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    railsClient
      .get("/v1/todos", {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        const payload = res.data.data;
        this.setState({ todos: payload });
      });
  }

  handleTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleContent(e) {
    this.setState({ content: e.target.value });
  }

  handleLabel(e) {
    this.setState({ label: e.target.value });
  }

  todoDelelte(id) {
    const { todos } = this.state;
    railsClient.delete(`v1/todos/${id}`).then(res => {
      const payload = res.data.data;
      todos.splice(payload, 1);
      this.setState({ todos });
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { todos, title, content, label } = this.state;

    const postData = {
      title: title,
      content: content,
      label: label
    };

    railsClient.post("/v1/todos", postData).then(res => {
      const payload = res.data.data;
      todos.push(payload);
      this.setState({ todos });
      this.setState({ title: "" });
      this.setState({ content: "" });
      this.setState({ label: "" });
    });
  }

  render() {
    const { todos, title, content, label } = this.state;

    return (
      <TodoAppWrapper>
        <TodoBody>
          {todos.length > 0 &&
            todos.map(todo => {
              return (
                <TodoWrapper key={todo.id}>
                  <TitleWrapper>
                    <TodoTitle>{todo.title}</TodoTitle>
                    <TodoDelete onClick={() => this.todoDelelte(todo.id)}>
                      x
                    </TodoDelete>
                  </TitleWrapper>
                  <TodoContent>{todo.content && todo.content}</TodoContent>
                  <TodoLabel>{todo.label && todo.label}</TodoLabel>
                </TodoWrapper>
              );
            })}
        </TodoBody>
        <TodoForm onSubmit={e => this.onSubmit(e)}>
          <TodoItem>
            <label>タスク名</label>
            <input
              type="text"
              value={title}
              onChange={e => this.handleTitle(e)}
            />
          </TodoItem>
          <TodoItem>
            <label>タスク詳細</label>
            <textarea value={content} onChange={e => this.handleContent(e)} />
          </TodoItem>
          <TodoItem>
            <label>ラベル</label>
            <input
              type="text"
              value={label}
              onChange={e => this.handleLabel(e)}
            />
          </TodoItem>
          <button type="submit">送信！</button>
        </TodoForm>
      </TodoAppWrapper>
    );
  }
}

const TodoAppWrapper = styled("div")`
  display: flex;
`;

const TodoBody = styled("div")`
  margin-right: 40px;
`;

const TodoWrapper = styled(Card)`
  && {
    margin-bottom: 20px;
  }
`;

const TitleWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const TodoTitle = styled("p")`
  font-size: 15px;
`;

const TodoDelete = styled("div")`
  margin-right: 20px;
  cursor: pointer;
`;

const TodoContent = styled("p")`
  font-size: 12px;
`;

const TodoLabel = styled("p")`
  font-size: 10px;
`;

const TodoForm = styled("form")`
  display: flex;
  flex-direction: column;
`;

const TodoItem = styled("div")`
  margin-bottom: 10px;
`;

export default RailsAPI;
