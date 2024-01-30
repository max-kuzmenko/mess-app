import React from 'react';

const TodoItem = ({ todo, onRemove }) => {
  const { id, name, createdAt } = todo;

  return (
    <div className="todo-item">
      <h3>{name}</h3>
      <p>Created At: {new Date(createdAt).toLocaleString()}</p>
      <p>ID: {id}</p>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
};

export default TodoItem;
