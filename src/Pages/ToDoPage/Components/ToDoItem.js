
function ToDoItem ({ data, index }) {

    const taskDoneHandler = (index) => {
        console.log('click')
    }

    return (
        <div className="todo-item">
            <h3 className="todo-title">{data.title}</h3>
            <span className="todo-created-date">Created: {data.date}</span>
            <p className="todo-description">{data.description}</p>
            <span className="todo-due-date">Due date: {data.dueDate}</span>

            <div className="form-control">
                <label htmlFor="done">Done</label>
                <input className="todo-done"  checked={data.done} type="checkbox" id="done" name="done" onChange={() => taskDoneHandler(index)}></input>
            </div>
        </div>
    )
};

export default ToDoItem;