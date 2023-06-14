import { useState } from "react";

function ToDoForm ({ onNewTask }) {

    const [title, setTitle] = useState('');
    const [date, setData] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueData] = useState('');


    const createToDoItemHandler = (event) => {
        event.preventDefault();

        let date = new Date();

        // const day = date.getDate().toString().padStart(2, '0');
        // const month = (date.getMonth() + 1).toString().padStart(2, '0');
        // const year = date.getFullYear();

        // const fullDate = `${year}-${month}-${day}`;
        const fullDate = date.toISOString().slice(0, 10);

        const newTask = {
            id: Math.random(),
            title: title,
            date: fullDate,
            description: description,
            dueDate: dueDate,
            done: false,
        }

        // console.log(newTask)
        onNewTask(newTask);
    }
    
    const titleHandler = (event) => setTitle(event.target.value);
    const dataHandler = (event) => setData(event.target.value);
    const descriptionHandler = (event) => setDescription(event.target.value);
    const dueDataHandler = (event) => setDueData(event.target.value);


    return (
        <form  onSubmit={createToDoItemHandler}>
                <div className="form-control">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={title} onChange={titleHandler}></input>
                </div>

                <div className="form-control">
                    <label htmlFor="note-description">Description:</label>
                    <textarea type="text" id="note-description" name="note-description" value={description} onChange={descriptionHandler}></textarea>
                </div>

                <div className="form-control">
                    <label htmlFor="due-data">Due date:</label>
                    <input type="date" id="due-data" value={dueDate} onChange={dueDataHandler}></input>
                </div>

                <input type="submit" value="Create task" />
            </form>
    )
}
export default ToDoForm;