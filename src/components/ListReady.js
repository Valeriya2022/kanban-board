import React, {useState} from 'react'
import {DropdownInput} from './input/DropdownInput'
import '../styles/main.css'


export class ListReady extends React.Component {
   
    
    render(){
        return (
            <div className ={"block"}>
                <h1 className={"blockTitle"}>{this.props.title}</h1>
                <div className={"blockData"}>
                {this.props.data.map((value, index)=>{
                    return <div className="card">{value}</div>
                })}
                
                <DropdownInput data={this.props.data}
                setData={this.props.setData}
                prevData={this.props.prevData}
                setPrevData={this.props.setPrevData}
                storage={this.props.storage}
                prevStorage={this.props.prevStorage}/>
                </div>
        </div>
    )
    
    }
}

    

         
         
 