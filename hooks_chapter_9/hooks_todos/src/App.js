// Importing necessary modules and components
import React, { useReducer } from 'react'; // Importing React and useReducer hook
import ToDoList from './ToDoList'; // Importing ToDoList component
// import { v4 as uuidv4 } from 'uuid'; // Importing uuidv4 function from uuid library

// Initial state for todos
const todosInitialState = {
  todos: []
};

// Reducer function for managing todos
// Creating a context for todos
export const TodosContext = React.createContext()

// Main App component
function App() {
  // Using useReducer hook to manage state with todosReducer and initial state todosInitialState
  const [state, dispatch] = useReducer(todosReducer, todosInitialState)
  // Providing the state and dispatch function to the ToDoList component through context
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <ToDoList />
    </TodosContext.Provider>
  );
}
function todosReducer(state, action) {
  // Switch statement to handle different actions
  switch (action.type) {
    case 'get':
      return { ...state, todos: action.payload }
    // Case for adding a new todo
    case 'add':
      // Creating a new todo object with a unique id using uuidv4

      // Adding the new todo to the existing list of todos
      const addedToDos = [...state.todos, action.payload]
      // Returning a new state object with the updated list of todos
      return { ...state, todos: addedToDos }
    // Case for deleting a todo
    case 'delete':
      // Filtering out the todo with the specified id
      const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id)
      // Returning a new state object with the filtered list of todos
      return { ...state, todos: filteredTodoState }
    // Case for editing a todo
    case 'edit':
      // Creating a copy of the edited todo
      const updatedToDo = { ...action.payload }
      // Finding the index of the todo to be updated
      const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id)
      // Updating the todo in the list of todos
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1)
      ];
      // Returning a new state object with the updated list of todos
      return { ...state, todos: updatedToDos }
    // Default case: return the initial state
    default:
      return todosInitialState
  }
}



// Exporting App component
export default App;
