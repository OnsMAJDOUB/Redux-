import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (description) {
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: Date.now(), // unique id
          description,
          isDone: false,
        },
      });
      setDescription(""); // Clear input after adding
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
        className="border p-2 mr-2"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
