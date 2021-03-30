import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    await axios("http://localhost:8000/todos/").then((res) => {
      setTodos(res.data);
    });
    return todos;
  };
  console.log(todos);
  return (
    <ul>
      {/* {todos.map((todo) => {
        return <li key={todo.id}>{todo.todo}</li>;
      })} */}
    </ul>
  );
}

export default App;
