import './App.css';
import React from 'react';
import Border from './Border.js';
import Project from './Project.js';
import * as Data from '../Data/Data.js'

class Dashboard extends React.Component{   
    renderProjects = () => {
        return (Data.getAllProjects().map((data, i)=>{
            return(
                <Border key = {i} content = {
                    <Project data = {data}/>
                } type = 'regular'></Border>
            )
        }));
    }
    
    render(){
        const projectData = {
            name: 'Project Name',
            teamName: 'Team Name',
            timeLeft: 'Time Left',
            description: 'Description',
            tasks: 'Tasks',
            comments: 'Comments',
        }

        return (
            <div className = 'Dashboard'>
                <h1 className = 'WindowTitle'> Dashboard </h1>
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

                        {this.renderProjects()}
                        
                        <Border content = "Border" type = 'dashed'></Border>
                    </div>
                    } 
                    type = 'screen'>
                </Border>

            </div>
        
        );
    }
}

export default Dashboard;