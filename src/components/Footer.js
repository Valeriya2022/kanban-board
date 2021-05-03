import React from 'react'
import '../styles/main.css'


export function Footer() {
    return (
        <div className={"footerStatic"}>
            <div className={"wrapper footer"}>
                <div className={"text"}>Active tasks: N </div>
                <div className={"text"}>Finished tasks: M</div>
                <div className={"text"}>Kanban board by Nikiforova Valeriya, 2021</div>  
            </div>
        </div>
    )
}
