import Container from "../../Components/Container/Container";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";
import './toDoPage.css';
import { useState } from "react";


function ToDoPage () {

    let tasksList = [
        {   
            id: 1,
            date: '2023-06-12',
            title: 'Pavadinimas',
            description: 'Description',
            dueDate: '2023-06-20',
            done: false,
        },
        {
            id: 2,
            date: '2023-10-01',
            title: 'Pavadinimas 2',
            description: 'Description 2',
            dueDate: '2023-10-02',
            done: false,
        },
    ];
    const [toDos, setToDos] = useState(tasksList);

    const toDoUpdateHandler = (toDo) => {
        setToDos(prevState => {
            const newState = [toDo, ...prevState];
            return newState;
        })
    }



    return (
        <Container>
            <ToDoForm onNewTask={toDoUpdateHandler}/>

           <ToDoList data={toDos}/>

        </Container>
    )
}

export default ToDoPage;