import './App.css';
import TaskList from './TaskList.js'
import React from 'react';

class Project extends React.Component{
    constructor(props){
        super(props)
        if(props.data)
        this.state = {
            name: props.data.name,
            teamName: props.data.teamName,
            timeLeft: props.data.timeLeft,
            description: props.data.description,
            tasks: props.data.tasks,
            comments: props.data.comments,
        }
    }

    render(){
        switch(this.props.type){
            
            default: return(
                <div>
                    <h5>{this.state.name}</h5>
                    <h6>{this.state.teamName}</h6>
                    <p className = 'timeLeft'>{this.state.timeLeft} </p>
                    <TaskList Project = {this.state.name}/>
                </div>
            )
        }
    }
}

export default Project;