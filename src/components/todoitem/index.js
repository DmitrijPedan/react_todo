import React from 'react';

function TodoItem ({tasks}) { 
    return (
    <li>{ tasks.title }</li>
    )
}

export default TodoItem;