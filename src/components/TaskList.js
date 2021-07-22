import './App.css';
import React from 'react';

class TaskList extends React.Component{   
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
        const persent = "33%"
        
        if(this.props.style && this.props.style !== "compact"){
            return(
                <div>
                    
                    <div class="progress-bar">
                        <div class = "progress-bar-fill" 
                            style = {{width: persent}}>
                        </div>
                    </div>
                    this is not compact thing. list should be here.
                </div> 
            )
        } else {return(
                <div>
                    <div class="progress-bar">
                        <div class = "progress-bar-fill" 
                            style = {{width: persent}}>
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}

export default TaskList;