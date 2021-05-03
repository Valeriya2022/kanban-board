import React, {useState} from 'react'
import "../../styles/main.css"

export function InputCard({setOpen}) {
    const [cardContent, setCardContent] = useState("");
    function onClickFunction (){
        setOpen(false);
        let content = [cardContent]
       
        if (localStorage.getItem("backlogContent") === null) {
            localStorage.setItem('backlogContent', JSON.stringify(content))
            
        }else{
            let storedContent = JSON.parse(localStorage.getItem("backlogContent"));
            storedContent.push(cardContent);
            localStorage.setItem('backlogContent', JSON.stringify(storedContent));

        }
        let event = new Event('itemInserted');
        document.dispatchEvent(event);
        setCardContent("");
        
    }
    return (
        <div>
            <div className={"card addCardWrapper"}>
                <input type="text" value={cardContent}
                 onChange={e => setCardContent(e.target.value)} 
                 class={"input"}></input>   
            </div>    
            <button className={"addCard submit"} onClick={onClickFunction}>Submit</button>     
        </div>

    )
}
