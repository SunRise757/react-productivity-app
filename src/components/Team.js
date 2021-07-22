import './App.css';
import React from 'react';

class Team extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            picture: props.picture,
            name: props.name,
            people: props.people,
        }
    }

    render(){
        return(
            <div>
                <h5>{this.state.name}</h5>
            </div>
        )
    }
}

export default Team;