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
                        complete: false,
                        name: "Task 1",
                        date: "Date 1",
                    }
                ],
                persent: "0%",
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

    handleNameChange = (e, i) => {
        let newTasks = this.state.tasks;
        newTasks[i].name = e.target.value;

        this.setState(
            {
                tasks: newTasks,
            }
        );
    }

    addTask = () => {
        let newTasks = this.state.tasks;
        newTasks.push({
            complete: false,
            name: "New task",
            date: "Date 1",
        },)

        this.setState(
            {
                tasks: newTasks,
                persent: this.calculatePersent(newTasks),
            }
        );
    }

    deleteTask = (i) => {
        //console.log(i)
        let newTasks = this.state.tasks;
        newTasks.splice(i, 1);

        this.setState({
            tasks: newTasks,
            persent: this.calculatePersent(newTasks),
        })
    }

    onTaskDateChange = (e, i) => {
        //console.log('i = ' + i + 'e = ' + e.target.value);

        let newTasks = this.state.tasks;
        newTasks[i].date = e.target.value;

        console.log(JSON.stringify(newTasks));

        this.setState({
            tasks: newTasks,
        })
    }

    renderTasks = () => {
        return(
            this.state.tasks.map(
                (taskData, i) => {
                    //console.log(i);
                    return <Task 
                        data = {taskData} 
                        key = {i} 
                        onComplete = {() => this.updatePersent(i)}
                        onNameChange = {(e) => this.handleNameChange(e, i)}
                        onDelete = {() => {this.deleteTask(i)}}
                        onDateChange = {(e) => {this.onTaskDateChange(e, i)}}
                    >
                    </Task>        
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
                    <button onClick = {this.addTask}>+</button>
                </div> 
            )
        } else {
            return( // if compact
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