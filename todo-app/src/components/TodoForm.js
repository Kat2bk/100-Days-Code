import React from "react";
import {useState} from "react";
import {v4 as uuid} from "uuid";
// 10.41 pm we tried to fix the uuid module, does not break react, we will try later

 function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(event) {
        setTodo({ ...todo, task: event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: uuid()});
            // we want to reset the form
            setTodo({...todo, task: ""});
        }
    }  

    return (
        <form onSubmit={handleSubmit}>
        <input name="task" type="text" value={todo.task} onChange={handleTaskInputChange} />
        <button type="submit">Submit</button>
        </form>
    )
}

export default TodoForm;