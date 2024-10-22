import React from "react";
import { useSelector } from "react-redux";
import TodoModel from "./TodoModel";
import AddTask from "./AddTask";

const TodoList = () => {
  const filteredTodos = useSelector((state) => state.filteredTodos);

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Your To-Do List</h2>
      <AddTask />
      <ul className="bg-white rounded shadow-md">
        {filteredTodos.map((todo) => (
          <TodoModel key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
