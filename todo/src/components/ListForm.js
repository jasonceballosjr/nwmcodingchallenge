import React, { useState, useContext, useEffect } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';

const ListForm = () => {
    const { addItem, clearList, editTask, editItem, funItem } = useContext(ToDoContext);
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        if (!editItem) {
            addItem(title);
            setTitle('');
        } else {
            editTask(title, editItem.id);
        }
    }

    const handleChange = e => {
        setTitle(e.target.value);
    }

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title);
            console.log(editItem);
        } else {
            setTitle('');
        }
    }, [editItem])

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                placeholder="What do you want to do?"
                value={title}
                onChange={handleChange}
                required
                className="taskInput"
            />
            <div className="buttons">
                <button type="submit" className="button addTask">
                    {editItem ? 'Edit Item' : 'Add Item'}
                </button>
                <button className="button clearButton" onClick={clearList}>
                    Remove
                </button>
                <button className="button funButton" onClick={funItem}>
                    Click Me
                </button>
            </div>
        </form>
    )
}

export default ListForm;