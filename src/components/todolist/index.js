import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todoitem'
import './styles.css'



function TodoList (props) {
    return (
        <ul className = "tasks-list">
            { props.tasks.map((el, i) => <TodoItem 
                task = {el} 
                index = {i} 
                key = {el.id} 
                changeDone = {props.changeDone}
                />)}
        </ul>
    )
}

TodoItem.TodoList = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeDone: PropTypes.func.isRequired,
}

export default TodoList;