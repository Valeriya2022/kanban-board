import React, {useState} from 'react'
import {Card} from "./Card"
import {InputContainer} from './input/InputContainer'
import '../styles/main.css'

export function List() {
    let initialData = JSON.parse(localStorage.getItem("backlogContent"));
    if (initialData === null){
        initialData = []
    }
        
    const [data, setData] = useState(initialData);
          return (
            <div className ={"block"}>
                <h1 className={"blockTitle"}>Backlog</h1>
                {data.map((value, index)=>{
                    return <Card value={value}/>
                })}
    
                <InputContainer setData={setData}/>
        </div>
    )
    
         
    
}
