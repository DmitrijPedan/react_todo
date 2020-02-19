import React from 'react';
import { useState } from 'react';
import Context from '../../context'
import TodoList from '../todolist'

import './styles.css'

function App () {

    let state = useState([
        {id: Math.ceil(Math.random()*10000), title: 'Задача 1', content: 'Изучить React', done: false},
        {id: Math.ceil(Math.random()*10000), title: 'Задача 2', content: 'Слетать на Луну', done: false},
        {id: Math.ceil(Math.random()*10000), title: 'Задача 3', content: 'Позвонить Януковичу', done: false},
        {id: Math.ceil(Math.random()*10000), title: 'Задача 4', content: 'Продать кота', done: false},
        {id: Math.ceil(Math.random()*10000), title: 'Задача 5', content: 'Вернуть Крым', done: false},
        {id: Math.ceil(Math.random()*10000), title: 'Задача 7', content: 'Купить молока', done: true},
    ]);
    
    let tasks = state[0];
    let editTasks = state[1]

    const changeDone = (id) => editTasks(tasks.map(el => {
        if (el.id === id) {
            el.done = !el.done 
        }
        return el;
    }))

    // const addTask = (id) => editTasks(tasks.filter(el => el.id !== id))
    const deleteTask = (id) => editTasks(tasks.filter(el => el.id !== id))
    
    
    
    return (
        <Context.Provider value = { {deleteTask: deleteTask} }>
            <main>
                <div className = "container"> 
                    <h2>Список задач:</h2>
                    <TodoList tasks = {tasks} changeDone = {changeDone} />
                </div>
            </main>
        </Context.Provider>
    )
}

export default App;