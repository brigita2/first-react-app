import Container from "../../Components/Container/Container";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";
import './toDoPage.css';
import { useState } from "react";


function ToDoPage () {

    let tasksList = [
        {   
            id: Math.random(),
            date: '2023-06-12',
            title: 'Pavadinimas',
            description: 'Description',
            dueDate: '2023-06-20',
            done: false,
        },
        {
            id: Math.random(),
            date: '2023-10-01',
            title: 'Pavadinimas 2',
            description: 'Description 2',
            dueDate: '2023-10-02',
            done: false,
        },
    ];
    const [toDos, setToDos] = useState(tasksList);
    const [editTodo, setEditTodo] = useState(null);

    const toDoUpdateHandler = (toDo) => {
        if (editTodo) {
            console.log(toDo)
        } else {
            setToDos(prevState => {
                const newState = [toDo, ...prevState];
                return newState;
            })     
        }
        
    }

    const doneToDoHandler = (id) => {
        const clickedTodoIndex = toDos.findIndex((todo) => {
            return todo.id === id;
        })

        setToDos(prevState => {
            const newState = [...prevState];
            const clickedTodo = newState[clickedTodoIndex];
            const updatedClickedTodo = {...clickedTodo};
            updatedClickedTodo.done = !updatedClickedTodo.done;

            newState[clickedTodoIndex] = updatedClickedTodo;

            return newState;
        })
    }

    const removeTodoHandler = (idToRemove) => {
        setToDos(prevState => {
            const newState = prevState.filter((todo) => {
                return todo.id !== idToRemove;
            })

            return newState;
        })

    }
    const editTodoHandler = (idToEdit) => {
    const selectedEditTodo = toDos.find(todo => todo.id === idToEdit)
    setEditTodo(selectedEditTodo)
    }

    return (
        <Container>
            <ToDoForm onNewTask={toDoUpdateHandler} editData={editTodo}/>
            <ToDoList data={toDos} onTaskDone={doneToDoHandler} onTaskRemove={removeTodoHandler} onTaskEdit={editTodoHandler}/>
        </Container>
    )
}

export default ToDoPage;