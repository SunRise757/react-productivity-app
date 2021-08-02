import './App.css';
import React from 'react';
import Border from './Border.js';
import Project from './Project.js';
import * as Data from '../Data/Data.js'

class Dashboard extends React.Component{   
    constructor(props){
        super(props);

        this.state = {
            projects: Data.getAllProjects()
        }
    }
    
    renderProjects = (projects) => {
        return (projects.map((data, i)=>{
            return(
                <Border key = {data[0] /*0*/} content = {
                    <Project data = {data} onDeleted = {() => {this.setState({projects: Data.getAllProjects()})}}/>
                } type = 'regular'></Border>
            )
        }));
        
        
        // return (Data.getAllProjects().map((data, i)=>{
        //     return(
        //         <Border key = {i} content = {
        //             <Project data = {data}/>
        //         } type = 'regular'></Border>
        //     )
        // }));
    }
    
    addProject = () => {
        Data.addProject();
        this.setState({
            projects: Data.getAllProjects()
        });
    }

    render(){
        /*
        const projectData = {
            name: 'Project Name',
            teamName: 'Team Name',
            timeLeft: 'Time Left',
            description: 'Description',
            tasks: 'Tasks',
            comments: 'Comments',
        }
        */
        
        return (
            <div className = 'Dashboard'>
                <h1 className = 'WindowTitle'> Projects </h1>
                <Border content = {
                    <div className = 'Borders'>
                        {/*
                            <Border content = {
                                <div>
                                <Team name = 'TeamName'></Team>
                                </div>
                                
                            } type = 'regular'></Border>
                        */
                        }

                        {/* test project 0
                            <Border content = {
                                <Project data = {projectData}/>
                            } type = 'regular'></Border>
                        */}

                        {this.renderProjects(this.state.projects)}
                        
                        <Border content = {
                            <div className = 'AddProject'>
                                <button className = 'AddProject' onClick = {this.addProject}><label className = 'AddProject'>+</label></button>
                            </div>
                        } type = 'dashed'></Border>
                    </div>
                    } 
                    type = 'screen'>
                </Border>

            </div>
        
        );
    }
}

export default Dashboard;