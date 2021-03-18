import axios from "axios";
import React from "react";

let mydata;
fetch("https://localhost:8000/todos")
  .then((response) => response.text())
  .then((data) => (mydata = data));
console.log(mydata);

class App extends React.Component {
  render() {
    return (
      <ul>
        {mydata.map(({ data }) => (
          <li key={data.id}>{data.todo}</li>
        ))}
      </ul>
    );
  }
}

export default App;
