import React, { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";
import Task from "./Task";

const ToDoList = () => {
    const { tasks } = useContext(ToDoContext);

    return (
        <div>
            {tasks.length ? (
                <ul className="list">
                    {tasks.map(task => {
                        return <Task task={task} key={task.id} />;
                    })}
                </ul>
            ) : (
                <div className="noTask">Nothing To Do!</div>
            )}
        </div>
    );
};

export default ToDoList;