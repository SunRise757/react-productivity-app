import './App.css';
import React from 'react';

class Task extends React.Component{   

    render(){ 
        
        return(
            //<input type = 'checkbox'> kek </input>
            <div>
                <input type="checkbox" checked = {this.props.data.complete} onChange = {this.props.onChange}/>
                <label style = {
                    this.props.data.complete ?
                    {
                        'textDecoration': 'line-through',
                    }:{}
                }>
                {this.props.data.name} {this.props.data.date}
                </label>
                
                
            </div>
        )
    }
}

export default Task;