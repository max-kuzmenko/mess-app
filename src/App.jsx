import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import { getTodos, updateUserTodos } from "./api";
import { trackFirstClicks } from "./tracking";

function App() {
  const [todos, setTodos] = useState([]);

  const { userId, topicId } = useParams();

  const todosApiParams = { topic: topicId, user: userId };

  useEffect(() => {
    const request = getTodos(todosApiParams);
    request.then(response => response.json());
    request.then(userTodos => setTodos(userTodos));
  }, [todosApiParams]);

  let userClicks = 0;

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

    updateUserTodos(userId, topicId, todos);
  };

  const handleRemoveTodo = (id) => {
    userClicks += 1;
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);

    updateUserTodos(userId, topicId, updatedTodos);
  };

  return (
    <main className="page">
      <h1>Todo App</h1>
      <AddTodo onAdd={handleAddTodo} />
      <ul className="todo-list">
        {todos.map(todo => (
          <div className="todo-item">
            <TodoItem todo={todo} onRemove={handleRemoveTodo} />
          </div>
        ))}
      </ul>
    </main>
  );
}

export default App;
