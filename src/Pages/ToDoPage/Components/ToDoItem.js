
function ToDoItem ({ data, onTaskDone, onTaskRemove, onTaskEdit }) {

const { title, date, description, dueDate, done, id } = data;

    return (
        <div className="todo-item">
            <h3 className="todo-title">{title}</h3>
            <span className="todo-created-date">Created: {date}</span>
            <p className="todo-description">{description}</p>
            <span className="todo-due-date">Due date: {dueDate}</span>

            <div className="form-control">
                <label htmlFor={`done-${id}`}>{done ? 'Done' : 'Task is not done'}</label>
                <input 
                className="todo-done"  
                checked={done} 
                type="checkbox" 
                id={`done-${id}`} 
                name="done" 
                onChange={() => onTaskDone(id)} 
                />
            </div>

            <button onClick={() => onTaskRemove(id)}>Remove</button>
            <button onClick={() => onTaskEdit(id)}>Edit</button>
        </div>
    )
};

export default ToDoItem;