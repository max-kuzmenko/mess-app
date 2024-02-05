import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import RadioButtonGroup from './RadioButtonGroup';
import { getTodos } from "./api";
import { trackFirstClicks } from "./tracking";

function App() {
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState('fetched');

  let userClicks = 0;

  const filter = { type };

  useEffect(() => {
    const request = getTodos(filter);
    request.then(response => response.json());
    request.then(data => setTodos(data.map(todo => ({ ...todo, type: 'fetched' }))));
  }, [filter]);

  useEffect(() => {
    setTimeout(() => {
      trackFirstClicks(userClicks);
    }, 10000);
  }, []);

  const handleAddTodo = (name) => {
    userClicks += 1;
    const newTodo = { id: todos.length + 1, name: name, type: 'my' };
    todos.unshift(newTodo);
    setTodos(todos);
  };

  const handleRemoveTodo = (id) => {
    userClicks += 1;
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <main className="page">
      <h1>Todo App</h1>
      <RadioButtonGroup
        options={['fetched', 'my']}
        onSelect={(opt) => setType(opt)}
      />
      <AddTodo onAdd={handleAddTodo} />
      <ul className="todo-list">
        {todos.map(todo => (
          <li className="todo-item">
            <TodoItem todo={todo} onRemove={handleRemoveTodo} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
