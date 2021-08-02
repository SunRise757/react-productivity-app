import './App.css';
import TaskList from './TaskList.js'
import React from 'react';
import Border from './Border.js'
import * as Data from '../Data/Data.js'
import TimeLeft from './TimeLeft.js'

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
                minRows: 5, 
                maxRows: 15,
                //descriptionRows: props.data[1].descriptionRows ? props.data[1].descriptionRows : 5.
            }; 
        else this.state = {
            //key: props.data[0],
            name: 'New project',
            teamName: 'New team',
            timeLeft: props.data[1].timeLeft,
            description: 'Project description',
            tasks: props.data[1].tasks,
            comments: props.data[1].comments,
            visibility: props.type,
            minRows: 5, 
            maxRows: 15,
            //descriptionRows: props.data[1].descriptionRows ? props.data[1].descriptionRows : 5.
        }
    }

    setVisibility = (newVisibility) => {
        this.setState({
            visibility: newVisibility,
        })
    }

    saveChanges = () => {
        if(Data.doesProjectExist(this.props.data[0]))
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
    //autochange heigth & change the thing
    onDescriptionChanged = (e) => {
        const textareaLineHeight = 24;
		const { minRows, maxRows } = this.state;
		
		const previousRows = e.target.rows;
  	    e.target.rows = minRows; // reset number of rows in textarea 
		
		const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);
    
        if (currentRows === previousRows) {
        	e.target.rows = currentRows;
        }
		
		if (currentRows >= maxRows) {
			e.target.rows = maxRows;
			e.target.scrollTop = e.target.scrollHeight;
		}
    
  	    this.setState({
        	description: e.target.value,
            descriptionRows: currentRows < maxRows ? currentRows : maxRows,
        });
    }

    addTask = () => {
        let tasks = this.state.tasks;
        tasks.push({
            complete: true,
            name: "Task Name 1",
            date: "Date 1",
        },);

        this.setState({
            tasks: tasks, 
        });
    }

    onDateChange = (e) => {

        this.setState({
            timeLeft: e.target.value, 
        });
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
                                className = 'Project-name'
                                value = {this.state.name} 
                                onChange = {this.onNameChanged}
                                //onBlur = {this.saveChanges}
                            >
                            </input></h5>
                            
                            {/*<h6>{this.state.teamName}</h6>*/}
                            
                            <TimeLeft 
                                date = {this.state.timeLeft} 
                                onChange = {this.onDateChange}
                                complete = {this.props.data.complete}></TimeLeft>
                            {/*<input type = 'date'></input>*/}
                            <div className = 'Project-description'>
                                <textarea 
                                    rows = {this.state.descriptionRows? this.state.descriptionRows : 5}
                                    className = 'Project-description'
                                    value = {this.state.description} 
                                    onChange = {(e)=>{
                                        this.onDescriptionChanged(e);
                                        //e.target.value.
                                    }}
                                    //onLoad = {this.onDescriptionChanged}
                                    //onBlur = {this.saveChanges}
                                >
                                </textarea>
                            </div>

                            <TaskList data = {this.state.tasks} type = 'full'/>
                            <button onClick = {() => {
                                Data.deleteProject(this.props.data[0]);
                                this.props.onDeleted();
                            }}>Delete project</button>
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
                    {/*<h6>{this.state.teamName}</h6>*/}
                    <TimeLeft 
                                date = {this.state.timeLeft} 
                                onChange = {this.onDateChange}
                                complete = {this.props.data.complete}></TimeLeft>
                    <TaskList data = {this.state.tasks} type = 'compact'/>
                </div>
            )
        }
    }
}

export default Project;