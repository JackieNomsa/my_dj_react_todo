import axios from "axios";
import React from "react";

class App extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8000/todos/`).then((res) => {
      const todos = res.data;
      this.setState(todos);
    });
  }

  render() {
    return (
      <ul>
        {this.state.todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    );
  }
}

export default App;
