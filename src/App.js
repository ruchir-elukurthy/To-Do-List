import "./App.css";
import ToDoList from "./components/ToDoList";
import React from "react";
import Headers from "./components/Headers";
import Addmore from "./components/Addmore";

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

  complete = (id) => {
    this.setState({
      todolist: this.state.todolist.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          console.log(id);
          console.log(todo.completed);
        }
        return todo;
      }),
    });
  };

  delete = (id) => {
    this.setState({
      todolist: [...this.state.todolist.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <Headers />
        <Addmore />
        <ToDoList
          todolist={this.state.todolist}
          complete={this.complete}
          delete={this.delete}
        />
      </div>
    );
  }
}

export default App;
