import './App.css';
import TaskList from './TaskList.js'
import React from 'react';
import Border from './Border.js'
import * as Data from '../Data/Data.js'

class Project extends React.Component{
    constructor(props){
        super(props)
        if(props.data)
        this.state = {
            //key: props.data[0],
            name: props.data[1].name,
            teamName: props.data[1].teamName,
            timeLeft: props.data[1].timeLeft,
            description: props.data[1].description,
            tasks: props.data[1].tasks,
            comments: props.data[1].comments,
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
        console.log('saving changes.... (not working yet)');
        Data.setProject(
            this.props.data[0],
            this.state
            )
    }

    onNameChanged = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    onDescriptionChanged = (e) => {
        this.setState({
            description: e.target.value,
        })
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
                            <h5><input 
                                value = {this.state.name} 
                                onChange = {this.onNameChanged}
                                //onBlur = {this.saveChanges}
                            >
                            </input></h5>
                            
                            <h6>{this.state.teamName}</h6>
                            <p className = 'timeLeft'>{this.state.timeLeft} </p>
                            <p> {this.state.description} </p>
                            <p><textarea 
                                value = {this.state.description} 
                                onChange = {this.onDescriptionChanged}
                                //onBlur = {this.saveChanges}
                            >
                            </textarea></p>

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