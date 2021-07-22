import './App.css';
import React from 'react';

class Task extends React.Component{   
    constructor(props){
        super(props);
        if (props.data){

            if  (props.data.tasks)
            this.state = {
                tasks: props.data.tasks,
            }
        } else {
            this.state = {
                tasks: [
                    {
                        complete: true,
                        name: "Task Name",
                        date: "Date",
                    },
                    {
                        complete: false,
                        name: "Task Name",
                        date: "Date",
                    },
                    {
                        complete: false,
                        name: "Task Name",
                        date: "Date",
                    }
                ]
            }

        }
        
    }
    
    render(){ 
        
        return(
            <div class="progress-bar">
                <div class = "progress-bar-fill" 
                    style = {{width: this.props.value}}>
                </div>

            </div>
        )
    }
}

export default Task;