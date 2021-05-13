import React, {useState, useEffect} from 'react'
import {Collapse} from "@material-ui/core"
import "../../styles/main.css"


export function DropdownInput(props) {
    const [open, setOpen] = useState(false);
    const [buttonState, setButtonState] = useState(props.prevData.length === 0);
    const prevData=props.prevData;
    setTimeout(
        function (){
            setButtonState(props.prevData.length === 0)
        },100
    );
    const handleChange = (event) => {
        if (event.target.value != NaN){
            setOpen(false);
        props.setData([...props.data, event.target.value    ]);
        localStorage.setItem(props.storage, JSON.stringify([...props.data, event.target.value]));
        let filtered = prevData.filter(function(value, index, arr){ 
            return value !== event.target.value;
        });
        localStorage.setItem(props.prevStorage, JSON.stringify(filtered)); 
        props.setPrevData(filtered);
        }
        
        
      }
     
    return (
        <div>
            <Collapse in={open}>
            <select className={"select"} onChange={handleChange}>
                <option className={"option"} value={NaN}></option>
                {prevData.map((value, index)=>{
                    if (value.length > 50){
                        return <option className={"option"} value={value}>{value.slice(0, 40)}...</option>
                    }
                    return <option className={"option"} value={value}>{value}</option>

                }
                )}
                
                

        </select>             
            </Collapse>
            <Collapse in={!open}>
                <button disabled={buttonState} className={"addCard"} onClick={()=>setOpen(!open)}>            
                + Add card
                </button>
            </Collapse>
                
                
            
        </div>
    )
}
