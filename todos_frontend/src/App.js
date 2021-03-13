import axios from "axios";
import react, { useState } from "react";

function App() {
  const [todos, setTodos] = useState();

  function componentDidMount() {
    let todos;
    axios
      .get("http://localhost:8000/todos/")
      .then((res) => {
        todos = res.data;
        setTodos(todos);
      })
      .catch((err) => {});
  }
  return (
    <div>
      <form method="POST">
        <input type="text" placeholder="Enter todo" />
        <input type="submit" value="add" />
      </form>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
