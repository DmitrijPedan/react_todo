import React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context'
import './styles.css'

function TodoItem ({task, index, changeDone}) { 
    const { deleteTask } = useContext(Context);

    return (
    <li>
        <div className = { task.done ? "task-item grayborder" : "task-item" }>
            <div className = "item-number-wrapper"> 
               <p> { index + 1 } </p>  
            </div>
            <div className = { task.done ? "item-content-wrapper line-through" : "item-content-wrapper" }> 
               <p><span className = "title"> { task.title } </span> { task.content } </p> 
            </div>
            <div className = "item-btn-wrapper">
                <button className = { task.done ? "done-btn grayfill" : "done-btn" } onClick = { () => changeDone(task.id) }>
                    <span></span>
                </button>
                <button className = "rm-btn" onClick = { () => deleteTask(task.id) }>
                    <span></span>
                </button>
            </div>
        </div>
         
    </li>
    )
}

TodoItem.propTypes = {
    task: PropTypes.object.isRequired,
    index: PropTypes.number,
    changeDone: PropTypes.func.isRequired,
}

export default TodoItem;