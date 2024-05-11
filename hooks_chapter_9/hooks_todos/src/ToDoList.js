import React, { useContext, useState, useEffect } from 'react'
import { TodosContext } from './App' // Importing TodosContext from App.js
import { Table, Form, Button } from 'react-bootstrap' // Importing necessary components from react-bootstrap
import useAPI from './useAPI'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

function ToDoList() {
    // Receive state and dispatch function from TodosContext
    const { state, dispatch } = useContext(TodosContext);

    // State variables to manage input field, edit mode, and the todo being edited
    const [todoText, setTodoText] = useState(""); // State to store the text of the todo
    const [editMode, setEditMode] = useState(false); // State to manage edit mode
    const [editTodo, setEditTodo] = useState(null); // State to store the todo being edited

    const endpoint = "https://localhost:3000/todos/"
    const savedTodos = useAPI(endpoint)

    useEffect(() => {
        dispatch({ type: "get", payload: savedTodos })
    }, [savedTodos])//dispatch whoever savedTodos changes

    // Determine the title for the submit button based on whether it's in edit mode or add mode
    const buttonTitle = editMode ? "Edit" : "Add";

    // Function to handle form submission
    const handleSubmit = async event => {
        event.preventDefault(); // Prevent the default form submission behavior
        if (editMode) { // If in edit mode
            // Dispatch edit action with the updated todo
            await axios.patch(endpoint + editTodo.id, { text: todoText })
            dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } });
            setEditMode(false); // Exit edit mode
            setEditTodo(null); // Clear the edit todo
        } else { // If in add mode
            // Dispatch add action with the new todo text
            const newToDo = { id: uuidv4(), text: todoText }
            const response = await axios.post(endpoint, newToDo)
            dispatch({ type: 'add', payload: newToDo });
        }
        setTodoText(""); // Clear the input field after adding/editing
    }

    return (
        <div>
            {/* Form to add/edit todos */}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        placeholder="Enter To Do"
                        value={todoText} // Controlled input
                        onChange={event => setTodoText(event.target.value)} // Update todoText state as user types
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {buttonTitle} {/* Display button title based on editMode */}
                </Button>
            </Form>
            {/* Table to display todos */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>To Do</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {state.todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.text}</td>
                            <td
                                // Click handler to populate input field with todo text and enable edit mode
                                onClick={() => {
                                    setTodoText(todo.text);
                                    setEditMode(true);
                                    setEditTodo(todo);
                                }}>
                                <Button variant="link">Edit</Button>
                            </td>
                            <td
                                // Click handler to delete todo
                                onClick={async () => {
                                    await axios.delete(endpoint + todo.id)
                                    dispatch({ type: 'delete', payload: todo })
                                }}>
                                <Button variant="link">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ToDoList;
