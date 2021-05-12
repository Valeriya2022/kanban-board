import React, {useState} from 'react'
import {Collapse} from "@material-ui/core"
import "../../styles/main.css"


export function InputContainer(props) {
    const handleChange = (content) => {
        props.handleChange(content);
      };
    const [open, setOpen] = useState(false);
    const [cardContent, setCardContent] = useState("");
    function onClickFunction (){
        setOpen(false);
        let content = [cardContent]
       
        if (localStorage.getItem(props.storage) === null) {
            localStorage.setItem(props.storage, JSON.stringify(content))
            handleChange(content);
            
        }else{
            let storedContent = JSON.parse(localStorage.getItem(props.storage));
            storedContent.push(cardContent);
            localStorage.setItem(props.storage, JSON.stringify(storedContent));
            handleChange(storedContent);

        }
        setCardContent("");
        
    }
    return (
        <div>
            <Collapse in={open}>
                <div className={"card addCardWrapper"}>
                    <input type="text" value={cardContent}
                    onChange={e => setCardContent(e.target.value)} 
                    class={"input"}>
                    </input>   
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
