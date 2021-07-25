import './App.css';
import Task from './Task.js'
import React from 'react';


class TaskList extends React.Component{   
    constructor(props){
        super(props);

        if (props.data){
            this.state = {
                tasks: props.data,
                persent: this.calculatePersent(props.data),
            }
        } else {
            this.state = {
                tasks: [
                    {
                        complete: true,
                        name: "Task Name 1",
                        date: "Date 1",
                    },
                    {
                        complete: false,
                        name: "Task Name 2",
                        date: "Date 2",
                    },
                    {
                        complete: false,
                        name: "Task Name 3",
                        date: "Date 3",
                    }
                ],
                persent: "10%",
            }

        }
        
    }
    
    calculatePersent = (tasks) => {
        let nCompleted = 0;
        for(let j = 0; j < tasks.length; j++){
            if(tasks[j].complete) nCompleted++;
        }

        let persent = Math.round(100 * nCompleted / tasks.length) + '%';

        return persent;
    }

    updatePersent = (i) => {
        let newTasks = this.state.tasks;
        newTasks[i].complete = !newTasks[i].complete ;

        let nCompleted = 0;
        for(let j = 0; j < newTasks.length; j++){
            if(newTasks[j].complete) nCompleted++;
        }
 
        let persent = Math.round(100 * nCompleted / newTasks.length) + '%';

        this.setState(
            {
                tasks: newTasks,
                persent: persent,
            }
        );
    }

    renderTasks = () => {
        return(
            this.state.tasks.map(
                (taskData, i) => {
                    //console.log(i);
                    return <Task data = {taskData} key = {i} onChange = {() => this.updatePersent(i)}></Task>        
                }
            )
        )
    }

    render(){ 
        let persent = this.state.persent;

        if(this.props.type && this.props.type !== "compact"){
            return(
                <div>
                    
                    <div className="progress-bar">
                        <div className = "progress-bar-fill" 
                            style = {{width: persent}}>
                        </div>
                    </div>
                    {this.renderTasks()}
                </div> 
            )
        } else {return( // if compact
                <div>
                    <div className="progress-bar">
                        <div className = "progress-bar-fill" 
                            style = {{width: persent}}>
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}

export default TaskList;