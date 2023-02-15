import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Draggable from "react-draggable";
import './index.css'

export default function AddTodo() {
  const [input, setInput] = useState({
    title: "",
    description: "",
    intialState: "todo"
  });
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput({
      title: "",
      description: "",
      intialState: "todo"
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          className="todo-user-input"
          value={input.title}
          placeholder="Todo Heading..."
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />
        <textarea
          value={input.description}
          className="todo-user-input"
          placeholder="Todo Description..."
          onChange={(e) => setInput({ ...input, description: e.target.value })}
        />
        <div>
           <button type="submit" className="button">Submit</button>
        </div>
      </form>
      <h1 class="todo-items-heading">My <span class="todo-items-heading-subpart">Tasks</span></h1>
      <div className="todos-container">
        <div className="todo-list-container todo-initial">
          <u>
            <h2>Todo List</h2>
          </u>
          {todos
            .filter((todo) => todo.intialState === "todo")
            .map((todo, i) => (
              <Draggable>
                <div key={i}  className="todos">
                  <h3>{todo.title}</h3>
                  <ReactMarkdown>{todo.description}</ReactMarkdown>
                </div>
              </Draggable>
            ))}
        </div>
        <div className="todo-list-container todo-inProgress">
          <u>
            <h2>In Progress</h2>
          </u>
          {todos
            .filter((todo) => todo.intialState === "inProgess")
            .map((todo, i) => (
              <Draggable>
                <div key={i}>
                  <h3>{todo.title}</h3>
                  <ReactMarkdown>{todo.description}</ReactMarkdown>
                </div>
              </Draggable>
            ))}
        </div>
        <div className="todo-list-container todo-completed">
          <u>
            <h2>Completed</h2>
          </u>
          {todos
            .filter((todo) => todo.intialState === "completed")
            .map((todo, i) => (
              <Draggable>
                <div>
                  <h3>{todo.title}</h3>
                  <ReactMarkdown>{todo.description}</ReactMarkdown>
                </div>
              </Draggable>
            ))}
        </div>
      </div>
    </div>
  );
}
