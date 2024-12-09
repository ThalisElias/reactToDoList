import React from "react";

export const ToDo = ({ todo, removeTodo }) => {
  return (
    <div className="todo">
      <div className="content">
        <p>{todo.text}</p>
        <p>({todo.category})</p>
      </div>
      <div>
        <button className="complete">Completar</button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};
