import React, {useState} from 'react'
import {Collapse} from "@material-ui/core"
import "../../styles/main.css"
import {InputCard} from './InputCard'


export function InputContainer() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Collapse in={open}>
                <InputCard setOpen={setOpen}/>
            </Collapse>
            <Collapse in={!open}>
                <button className={"addCard"} onClick={()=>setOpen(!open)}>            
                + Add card
                </button>
            </Collapse>
                
                
            
        </div>
    )
}
