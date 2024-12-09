import { useState } from "react";
import "./App.css";
import { ToDo } from "./components/todo";
import Todoform from "./components/todoform";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: todos.length + 1,
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo_list">
        {todos.map((todo) => (
          <ToDo todo={todo} key={todo.id} />
        ))}
      </div>
      <Todoform addTodo={addTodo} />
    </div>
  );
}

export default App;
