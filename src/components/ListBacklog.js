import React, {useState, useCallback} from 'react'
import {Card} from "./Card"
import {InputContainer} from './input/InputContainer'
import '../styles/main.css'


export class ListBacklog extends React.Component {
    getInitialData() {
        let initialData = JSON.parse(localStorage.getItem("backlogContent"));
        if (initialData === null){
            initialData = []
        }
        return initialData
    }
    constructor() {
        super();
        this.state = {
          data: this.getInitialData()
        };
        this.handleChange = this.handleChange.bind(this);
      }
      
      handleChange(content) {
        this.setState({ data: content });
      }
    render(){
        return (
            <div className ={"block"}>
                <h1 className={"blockTitle"}>Backlog</h1>
                {this.state.data.map((value, index)=>{
                    return <Card value={value}/>
                })}
    
                <InputContainer handleChange={this.handleChange}/>
        </div>
    )
    }
}
