import React, {useState} from 'react'
import {Collapse} from "@material-ui/core"
import "../../styles/main.css"


export function DropdownInput({data}) {
    const [open, setOpen] = useState(false);
    const [cardContent, setCardContent] = useState("");
    function onClickFunction (){
        setOpen(false);
        let content = [cardContent]
       
        if (localStorage.getItem("backlogContent") === null) {
            localStorage.setItem('backlogContent', JSON.stringify(content))
            setData(content);
            
        }else{
            let storedContent = JSON.parse(localStorage.getItem("backlogContent"));
            storedContent.push(cardContent);
            localStorage.setItem('backlogContent', JSON.stringify(storedContent));
            setData(storedContent);

        }
        let event = new Event('itemInserted');
        document.dispatchEvent(event);
        setCardContent("");
        
    }
    return (
        <div>
            <Collapse in={open}>
                <div className={"card addCardWrapper"}>
                <select name="selectList" id="selectList">
                  <option value="option 1">Option 1</option>
                  <option value="option 2">Option 2</option>
               </select>  
                </div>    
            <button className={"addCard submit"} onClick={onClickFunction}>Submit</button> 
            </Collapse>
            <Collapse in={!open}>
                <button className={"addCard"} onClick={()=>setOpen(!open)}>            
                + Add card
                </button>
            </Collapse>
                
                
            
        </div>
    )
}
