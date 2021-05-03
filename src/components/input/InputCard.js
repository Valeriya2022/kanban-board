import React, {useState} from 'react'
import "../../styles/main.css"

export function InputCard({setOpen}, {setData}) {
    const [cardContent, setCardContent] = useState("");
    function onClickFunction (){
        setOpen(false);
        let content = [cardContent]
       
        if (localStorage.getItem("backlogContent") === null) {
            localStorage.setItem('backlogContent', JSON.stringify(content))
            setData(content)
        }else{
            let storedContent = JSON.parse(localStorage.getItem("backlogContent"));
            storedContent.push(cardContent);
            localStorage.setItem('backlogContent', JSON.stringify(storedContent));
            setData(storedContent)

        }
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
