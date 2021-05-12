import React from 'react'
import {InputContainer} from './input/InputContainer'
import '../styles/main.css'


export class ListBacklog extends React.Component {
   
    
    render(){
        return (
            <div className ={"block"}>
                
                <h1 className={"blockTitle"}>{this.props.title}</h1>
                <div className={"blockData"}>
                {this.props.data.map((value, index)=>{
                    return <div className="card">{value}</div>
                })}
    
                <InputContainer handleChange={this.props.handleChange} storage={this.props.storage}/>
                </div>
        </div>
    )
    }
}
