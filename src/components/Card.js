import React from 'react'
import '../styles/main.css'
export function Card({value}) {
    return (
        <div>
             <div className={"card text"}>{value}</div>       
        </div>
    )
}
