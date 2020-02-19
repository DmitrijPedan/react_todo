import React from 'react';
import './styles.css'
import TodoList from '../todolist'

function Main (props) {
   
    return (
        <main>
            <div className = "container">
                <h1>This is Main section {props.tasks[0].title}</h1>
                <TodoList tasks = {props.tasks}/>
            </div>
        </main>
    )
}

export default Main;