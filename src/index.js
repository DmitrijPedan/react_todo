import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/header';
import App from './components/App';
import Footer from './components/footer';

import * as serviceWorker from './serviceWorker';


ReactDOM.render([
    <Header key = "header"/>, 
    <App key = "app"/>, 
    <Footer key = "footer"/>
], document.getElementById('root'));

serviceWorker.unregister();
