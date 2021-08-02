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
                <TimeLeft 
                    date = {this.props.data.date} 
                    onChange = {this.props.onDateChange}
                    complete = {this.props.data.complete}></TimeLeft>
                <input type="checkbox" checked = {this.props.data.complete} onChange = {this.props.onComplete}/>
                
                <div className = 'Task-name-div-right'>
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
                </div>    
            </div>
        )
    }
}

export default Task;