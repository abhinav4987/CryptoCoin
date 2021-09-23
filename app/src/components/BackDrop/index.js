import React from 'react'
import './style.css'

function BackDrop({sideOpen ,toggle}) {
    
    let classNameOption;
    if(sideOpen) {
        classNameOption = "backDrop"
    } else {
        classNameOption = "backDrop backdrop-close"
    }

    return (
        <div className={classNameOption} onClick={toggle}>
            hello
        </div>
    )
}

export default BackDrop
