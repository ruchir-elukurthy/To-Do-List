import "./App.css";
import ToDoList from "./components/ToDoList";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [
        {
          id: 1,
          title: "Make breakfast",
          completed: true,
        },
        {
          id: 2,
          title: "Empty dishwasher",
          completed: false,
        },
        {
          id: 3,
          title: "Study",
          completed: false,
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>This is my To Do List</h1>
        <ToDoList todolist={this.state.todolist} />
      </div>
    );
  }
}

export default App;
