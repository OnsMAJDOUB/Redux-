import { createStore } from "redux";

const initialState = {
  todos: [],
  filteredTodos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        filteredTodos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
        filteredTodos: state.todos.filter(
          (todo) => todo.isDone === action.payload
        ),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, description: action.payload.description }
            : todo
        ),
      };
    case "FILTER_TODOS":
      return {
        ...state,
        filteredTodos: state.todos.filter(
          (todo) => todo.isDone === action.payload
        ),
      };
    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;
