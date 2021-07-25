import './App.css';
import TaskList from './TaskList.js'
import React from 'react';
import Border from './Border.js'

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
            visibility: props.type,
        }
    }

    setVisibility = (newVisibility) => {
        this.setState({
            visibility: newVisibility,
        })
    }

    saveChanges = () => {
        //TODO save changes through Data.js after editing
    }

    render(){
        //console.log(this.state.tasks);
        switch(this.state.visibility){ 
            
            case 'full': return(
                <div className = "overlay-window" onClick = {
                        (e) => {
                            if(e.target.className === 'overlay-window')
                                this.setVisibility('compact');
                                this.saveChanges();
                        }
                    }
                    >
                    <Border content = {
                        //full project comp itself
                        <div className = "Project-full">
                            <h5>{this.state.name}</h5>
                            <h6>{this.state.teamName}</h6>
                            <p className = 'timeLeft'>{this.state.timeLeft} </p>
                            <p> {this.state.description} </p>
                            <TaskList data = {this.state.tasks} type = 'full'/>
                        </div>
                        //
                    } type = 'overlay'></Border>
                </div>
            )                       
                    
                    
            // compact
            default: return( 
                <div onClick = {() => {
                    this.setVisibility('full') 
                    this.saveChanges();
                }}
                className = "Project-compact">
                    <h5>{this.state.name}</h5>
                    <h6>{this.state.teamName}</h6>
                    <p className = 'timeLeft'>{this.state.timeLeft} </p>
                    <TaskList data = {this.state.tasks} type = 'compact'/>
                </div>
            )



        }
    }
}

export default Project;