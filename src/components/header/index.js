import React from 'react';
import './styles.css'

function Header () {
    return (
        <header>
            <div className = "container">
                <div className = "header-menu">
                    <div>
                        <h3 className = "header-logo">TO<span>Do</span></h3>
                    </div>
                    <div>
                        <button className = "add-task-btn"> + Add task</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;