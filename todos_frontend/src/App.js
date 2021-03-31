import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("http://localhost:8000/todos/");
      setTodos(data.data);
      return todos;
    }
    fetchData();
  }, []);

  return <p>cheese</p>;
}

export default App;
