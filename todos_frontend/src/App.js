import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    async function fetchData() {
      fetch("http://localhost:8000/todos/")
        .then((response) => response.json())
        .then((data) => setTodos(data));
      return todos;
    }
    fetchData();
  }, []);
  console.log(todos);
  const todo = todos.map((item) => <li key={item.id}>{item.todo}</li>);
  return <p>{todo}</p>;
}
export default App;
