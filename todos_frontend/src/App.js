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

  return <p>hi</p>;
}
export default App;
