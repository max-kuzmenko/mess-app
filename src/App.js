import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import RadioButtonGroup from './RadioButtonGroup';

const trackFirstClicks = (clicksAmount) => {
  console.log('User clicks in first 10 seconds: ', clicksAmount);
}

function App() {
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState('all');

  let userClicks = 0;

  const filter = { type };

  useEffect(() => {
    fetch(`https://65b8c458b71048505a896622.mockapi.io/api/v1/todos`)
      .then(response => response.json())
      .then(data => setTodos(data.map(todo => ({ ...todo, type: 'fetched' }))));
  }, [filter]);

  useEffect(() => {
    setTimeout(() => {
      trackFirstClicks(userClicks);
    }, 10000);
  }, []);

  const handleAddTodo = (name) => {
    userClicks += 1;
    const newTodo = { id: todos.length + 1, name: name };
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
        options={['all', 'my']}
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
