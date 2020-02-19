import React from 'react';

import './styles.css'

function Footer () {
    return (
        <footer>
            <div className = "container">
                <p> { `dmitrijpedan.github.io, ${new Date().getFullYear()}` } </p>
            </div>
        </footer>
    )
}

export default Footer;