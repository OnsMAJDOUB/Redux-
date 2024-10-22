import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoModel = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", payload: todo.id });
  };

  const handleEdit = () => {
    dispatch({
      type: "EDIT_TODO",
      payload: { id: todo.id, description: newDescription },
    });
    setEditing(false);
  };

  return (
    <li className="todo-item flex items-center justify-between bg-white rounded-lg p-2 mb-2">
      {isEditing ? (
        <div className="flex">
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="border p-1 rounded"
          />
          <button
            onClick={handleEdit}
            className="bg-green-500 text-white px-2 rounded ml-2"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={handleToggle}
          />
          <span className={todo.isDone ? "line-through ml-2" : "ml-2"}>
            {todo.description}
          </span>
          <button
            onClick={() => setEditing(true)}
            className="bg-yellow-500 text-white px-2 rounded ml-2"
          >
            Edit
          </button>
        </>
      )}
    </li>
  );
};

export default TodoModel;
