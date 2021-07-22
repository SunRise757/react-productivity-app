import './App.css';
import React from 'react';

class Border extends React.Component{
    render(){
        return(
            <div className = {"Border-" + this.props.type}>
                {this.props.content}
            </div>
        )
    }
}

export default Border;