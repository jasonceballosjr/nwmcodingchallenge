import React, { useContext } from 'react'
import { ToDoContext } from '../contexts/ToDoContext'

const Task = ({ task }) => {
    const { removeItem, findItem } = useContext(ToDoContext)
    return (
        <li className="listItem">
            <span>{task.title} </span>
            <div>
                <button
                    className="deleteButton taskButton"
                    onClick={() => removeItem(task.id)}
                >
                    <i className="fas fa-trash-alt"></i>
                </button>{' '}
                <button className="editButton taskButton" onClick={() => findItem(task.id)}>
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}

export default Task