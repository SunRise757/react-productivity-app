import './App.css';
import React from 'react';
import Border from './Border.js';
import Team from './Team.js';
import Project from './Project.js';

class Dashboard extends React.Component{   
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
                        <Border content = {
                            <div>
                                <Team name = 'TeamName'></Team>
                            </div>
                            
                        } type = 'regular'></Border>

                        <Border content = {
                            <Project data = {projectData}/>
                        } type = 'regular'></Border>

                        <Border content = "Border" type = 'regular'></Border>
                        <Border content = "Border" type = 'regular'></Border>
                        <Border content = "Border" type = 'dashed'></Border>
                        <Border content = "Border" type = 'dashed'></Border>
                        <Border content = "Border" type = 'dashed'></Border>
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