import axios from "axios";
import React from "react";

let mydata;
axios.get("http://localhost:8000/todos/").then((res) => {
  mydata = res.data;
  return mydata;
});

class App extends React.Component {
  render() {
    console.log(mydata);
    return (
      <ul>
        <li>{mydata}</li>
      </ul>
    );
  }
}

export default App;
