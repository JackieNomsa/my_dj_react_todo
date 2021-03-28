import axios from "axios";
import React from "react";

function fetchData() {}
let mydata;
fetch("https://localhost:8000/todos")
  .then((response) => response.text())
  .then((data) => (mydata = data));
console.log(mydata);

class App extends React.Component {
  render() {
    return (
      <ul>
        <li></li>
      </ul>
    );
  }
}

export default App;
