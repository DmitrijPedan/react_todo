import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

import * as serviceWorker from './serviceWorker';

let tasks = [
    {id: 1, title: 'task 1', content: 'Изучить React', done: false},
    {id: 2, title: 'task 2', content: 'Слетать на Луну', done: false},
    {id: 3, title: 'task 3', content: 'Позвонить Януковичу', done: false},
    {id: 4, title: 'task 4', content: 'Продать кота', done: false},
    {id: 5, title: 'task 5', content: 'Вернуть Крым', done: false},
    {id: 6, title: 'task 6', content: 'Вернуть Советский Союз', done: false},
    {id: 7, title: 'task 7', content: 'Купить молока', done: false},
]

ReactDOM.render([
    <Header key = "header"/>, 
    <Main tasks = {tasks} key = "main"/>, 
    <Footer key = "footer"/>
], document.getElementById('root'));

serviceWorker.unregister();
