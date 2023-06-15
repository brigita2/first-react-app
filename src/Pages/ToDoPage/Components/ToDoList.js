import ToDoItem from "./ToDoItem";

function ToDoList ({ data, onTaskDone, onTaskRemove, onTaskEdit }) {

    if (!data || data.length === 0) {
        return '';
    }
    return (
            <div className="tasks-wrapper">
                 <h1>Tasks:</h1>
                 {data.map((data, index) => {
                 return (
                     <ToDoItem data={data} key={index} onTaskDone={onTaskDone} onTaskRemove={onTaskRemove} onTaskEdit={onTaskEdit}/>
                 )
                 })}
           </div>
        )
}

export default ToDoList;