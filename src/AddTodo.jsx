import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [todoName, setTodoName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoName.trim()) return;
    onAdd(todoName);
    setTodoName('');
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
