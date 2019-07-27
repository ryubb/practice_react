import React from "react";
import { connect } from "react-redux";

import { fetchTodo } from "../reducers/fetchTodo";

class TodoAppSaga extends React.Component {
  render() {
    const { reducerTodo } = this.props;

    return (
      <p>
        <button onClick={() => this.props.dispatch(fetchTodo())}>
          クリック
        </button>
        {reducerTodo.loading ? (
          <p>Loading...</p>
        ) : reducerTodo.error ? (
          <p>Error, try again</p>
        ) : (
          reducerTodo.todos &&
          reducerTodo.todos.map(todo => {
            return (
              <div key={todo.id}>
                <p>{todo.title}</p>
                <p>{todo.content}</p>
              </div>
            );
          })
        )}
      </p>
    );
  }
}

const mapStateToProps = state => ({
  reducerTodo: state.reducerTodo
});

export default connect(mapStateToProps)(TodoAppSaga);

// reducerTodo &&
//   reducerTodo.todos.map(todo => {
//     return (
//       <div key={todo.id}>
//         <p>todo.title</p>
//         <p>todo.content</p>
//       </div>
//     );
//   });
