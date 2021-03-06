import React, {useRef} from 'react'
import '../styles/main.css'
import Avatar from '../icons/avatar.svg'
import Vector_down from '../icons/vector_down.svg'
import Vector_up from '../icons/vector_up.svg'
import { useDetectOutsideClick } from "./useDetectOutsideClick";


export function Header() {
    let image;
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    if(!isActive){
        image = <img className="vector" src={Vector_down} alt="Vector"></img>
        }else{
        image = <img className="vector" src={Vector_up} alt="Vector"></img>
    }
    return (
        <div className={"wrapper header"}>
        <div className={"headerTitle"}>Awesome Kanban Board</div>      
            
            <div className="container">
            <img src={Avatar} alt="Avatar"></img>
            
        <button onClick={onClick} className="menu-trigger">
        {image}              
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Log out</a>
            </li>
          </ul>
        </nav>
        <div></div>
      </div>
            
        </div>
    )
}
