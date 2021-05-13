import React from 'react'
import '../styles/main.css'


export function Footer(props) {
    return (
        <div className={"footerStatic"}>
            <div className={"wrapper footer"}>
                <div className={"text"}>Active tasks: {props.activeTasks} </div>
                <div className={"text"}>Finished tasks: {props.finishedTasks}</div>
                <div className={"text"}>Kanban board by Nikiforova Valeriya, 2021</div>  
            </div>
        </div>
    )
}
