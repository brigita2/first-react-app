import { useState } from "react";


function ToDoItem ({ data }) {

    const [done, setDone] = useState(false);
    const doneHandler = (event) => setDone(event.target.checked)


    return (
        <div className={`todo-item ${done ? 'item-done' : ''}`}>
            <h3 className="todo-title">{data.title}</h3>
            <span className="todo-created-date">Created: {data.date}</span>
            <p className="todo-description">{data.description}</p>
            <span className="todo-due-date">Due date: {data.dueDate}</span>

            <div className="form-control">
                <label htmlFor="done">Done</label>
                <input 
                className="todo-done"  
                checked={done} 
                type="checkbox" 
                id="done" 
                name="done" 
                onChange={doneHandler}>
                </input>
            </div>
        </div>
    )
};

export default ToDoItem;