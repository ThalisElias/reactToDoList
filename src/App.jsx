import { useState } from "react";
import "./App.css";
import { ToDo } from "./components/todo";
import Todoform from "./components/todoform";
import { Search } from "./components/Search";

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

  const [search, setSearch] = useState("");

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

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filterTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filterTodos);
  };
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <div className="todo_list">
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <ToDo
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <Todoform addTodo={addTodo} />
    </div>
  );
}

export default App;
