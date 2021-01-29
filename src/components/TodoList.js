import React, { useState } from "react";
import todosData from "../todosData";
import TodoItem from "../components/TodoItem";

const TodoList = () => {
  const [filteredTodos, setFilteredTodos] = useState(todosData);

  const handleChange = (event) => {
    let searchText = event.target.value.toLowerCase();
    const filtered = todosData.filter((item) =>
      item.description.toLowerCase().startsWith(searchText)
    );
    setFilteredTodos(filtered);
  };
  const todoItems = filteredTodos.map((item) => (
    <TodoItem key={item.id} item={item} />
  ));
  return (
    <div className="todo-list">
      <input
        className="todo-search"
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />

      {todoItems}
    </div>
  );
};

export default TodoList;
