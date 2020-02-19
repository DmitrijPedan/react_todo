import React from 'react';
import TodoItem from '../todoitem'

function TodoList (props) {
    return (
        <ul>
            { props.tasks.map(el => <TodoItem tasks = {el}/>)}
        </ul>
    )
}

export default TodoList;