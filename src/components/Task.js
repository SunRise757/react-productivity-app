import './App.css';
import React from 'react';
import TimeLeft from './TimeLeft.js'

class Task extends React.Component{   

    render(){ 
        return(
            //<input type = 'checkbox'> kek </input>
            <div className = 'tasks'>
                <button onClick = {this.props.onDelete}>x</button>
                <spacer> </spacer>
                {/*<label className = 'timeLeft'>{this.props.data.date} </label>   */}
                <TimeLeft date = {this.props.data.date} onChange = {this.props.onDateChange}></TimeLeft>
                <input type="checkbox" checked = {this.props.data.complete} onChange = {this.props.onComplete}/>
                <div className = 'Task-name-div'>
                    <input 
                    type = 'text'
                    className = 'Task-name'
                    value = {this.props.data.name} 
                    onChange = {this.props.onNameChange}
                    style = {
                        this.props.data.complete ?
                        {
                            'textDecoration': 'line-through',
                        }:{}
                    }
                    >
                    </input>

                
                {/*<label style = {
                     this.props.data.complete ?
                     {
                         'textDecoration': 'line-through',
                     }:{}
                 }>
                 </label>
                */}        
                </div>     
            </div>
        )
    }
}

export default Task;