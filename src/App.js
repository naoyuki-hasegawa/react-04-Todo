import "./App.css";
import TodoList from "./components/TodoList";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import React from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const todoNameRef = useRef();

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === "") return;
     console.log(name);
    setTodos((prevTodos) => {
      //console.log(prevTodos);
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" name="" id="" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクの追加</button>
      <button onClick={handleClear}>タスクの削除</button>
      <p>タスクの残:{todos.filter((todo) => !todo.completed).length}</p>
    </>
  );
};

export default App;