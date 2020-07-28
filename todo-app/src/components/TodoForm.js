import React, {useState} from "react";

function todoForm() {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(event) {
        setTodo({ ...todo, task: event.target.value});
    }

    return (
        <form>
        <input name="task" type="text" value={todo.task} onChange={handleTaskInputChange} />
        <button type="submit">Submit</button>
        </form>
    )
}

export default todoForm;