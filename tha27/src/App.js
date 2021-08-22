import React from "react";
import "./styles/output.css"
import AddTodo from "./components/addTodo";
import ListTodo from "./components/ListTodo"
function App() {
  return (<div className="m-auto text-center">
  <h1>
      To Do list
  </h1>
    <AddTodo/>
    <ListTodo/>
    </div>
  );
}

export default App;