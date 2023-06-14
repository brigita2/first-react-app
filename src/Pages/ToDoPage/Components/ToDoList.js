import ToDoItem from "./ToDoItem";

function ToDoList ({ data }) {

    return (
            <div className="tasks-wrapper">
                 <h1>Tasks:</h1>
                 {data.map((data, index) => {
                 return (
                     <ToDoItem data={data} key={index}/>
                 )
                 })}
           </div>
        )
}

export default ToDoList;