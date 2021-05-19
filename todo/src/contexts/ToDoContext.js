import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const ToDoContext = createContext();

const ToDoContextProvider = props => {
    const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

    const [tasks, setTasks] = useState(initialState);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const [editItem, setEditItem] = useState(null);

    const addItem = title => {
        setTasks([...tasks, { title, id: uuidv4() }]);
    }

    const removeItem = id => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const clearList = () => {
        setTasks([]);
    }

    const funItem = title => {
        title = "Hire Jason Ceballos";
        setTasks([...tasks, { title, id: uuidv4() }]);
    }

    const findItem = id => {
        const item = tasks.find(task => task.id === id);

        setEditItem(item);
    }

    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task));

        console.log(newTasks);

        setTasks(newTasks);
        setEditItem(null);
    }

    return (
        <ToDoContext.Provider
            value={{
                tasks,
                addItem,
                removeItem,
                clearList,
                findItem,
                editTask,
                editItem,
                funItem
            }}
        >
            {props.children}
        </ToDoContext.Provider>
    )
}

export default ToDoContextProvider