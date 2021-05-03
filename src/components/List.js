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
    setTimeout(()=>{
        // When local storage changes, dump the list to
        // the console.
        setData(JSON.parse(window.localStorage.getItem('backlogContent')));
        console.log(JSON.parse(window.localStorage.getItem('backlogContent')));
      }, 100);

          return (
            <div className ={"block"}>
                <h1 className={"blockTitle"}>Backlog</h1>
                {data.map((value, index)=>{
                    return <Card value={value}/>
                })}
    
                <InputContainer/>
        </div>
    )
    
         
    
}
