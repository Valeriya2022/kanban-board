import React, {useState} from 'react'
import {Card} from "./Card"
import {DropdownInput} from './input/DropdownInput'
import '../styles/main.css'

export function ListReady() {
    let initialData = JSON.parse(localStorage.getItem("readyContent"));
    if (initialData === null){
        initialData = []
    }
    const [data, setData] = useState(initialData);
    

          return (
            <div className ={"block"}>
                <h1 className={"blockTitle"}>Ready</h1>
                {data.map((value, index)=>{
                    return <Card value={value}/>
                })}
    
                <DropdownInput setData={setData} data={data}/>
        </div>
    )
    
         
    
}