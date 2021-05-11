import React, {useState} from 'react'
import {Collapse, Select, MenuItem} from "@material-ui/core"
import "../../styles/main.css"


export function DropdownInput({setData, data}) {
    const [open, setOpen] = useState(false);
    
    const handleChange = (event) => {
        setOpen(false);
        setData([...data, event.target.value    ]);
        localStorage.setItem('readyContent', JSON.stringify([...data, event.target.value    ]));
        
        
    //     if (localStorage.getItem("readyContent") == null) {
    //         localStorage.setItem('readyContent', JSON.stringify([event.target.value]))
    //         setData([event.target.value]);
            
    //     }else{
    //         let storedContent = JSON.parse(localStorage.getItem("readyContent"));
    //         storedContent.push(event.target.value);
    //         localStorage.setItem('readyContent', JSON.stringify(storedContent));
    //         setData(storedContent);
    //   };
    }
      let backlogData = JSON.parse(localStorage.getItem("backlogContent"));
      if (backlogData === null){
          backlogData = []
      }
    return (
        <div>
            <Collapse in={open}>
            <Select 
            
            onChange={handleChange}>
                <MenuItem/>
                    {backlogData.map((value, index)=>{
                    return <MenuItem value={value}>{value}</MenuItem>
                })}
        </Select>             
            </Collapse>
            <Collapse in={!open}>
                <button className={"addCard"} onClick={()=>setOpen(!open)}>            
                + Add card
                </button>
            </Collapse>
                
                
            
        </div>
    )
}
