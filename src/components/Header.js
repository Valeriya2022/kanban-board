import React from 'react'
import '../styles/main.css'
import Avatar from '../icons/avatar.svg'
import Vector_down from '../icons/vector_down.svg'


export function Header() {
    return (
        <div className={"wrapper header"}>
        <div><div className={"headerTitle"}>Awesome Kanban Board</div></div>
            
            <div className={"logo"}>
                <img src={Avatar} alt="Avatar"></img>
                <img src={Vector_down} alt="Vector"></img>
            </div>
            
        </div>
    )
}
