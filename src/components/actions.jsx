export const addTodo = (description) => ({
  type: "ADD_TODO",
  payload: {
    id: Math.random(), 
    description,
    isDone: false,
  },
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: id,
});
