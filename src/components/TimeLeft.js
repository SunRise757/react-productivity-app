import './App.css';
import React from 'react';

class TimeLeft extends React.Component{   
    
    render(){ 
        let dueDate = new Date(this.props.date);
        let curDate = new Date();
        var diff =  Math.ceil(( dueDate - curDate ) / 86400000); 
        var color = 'lightgray';
        var textColor = 'white';

        if(diff < 2){
            color = 'pink';
            textColor = 'red';
        } else if(diff < 4){
            color = 'yellow';
            textColor = 'orange';
        }

        if(this.props.complete){
            color = 'lime';
            textColor = 'darkgreen';
        }

        

        console.log(this.props.date)
        if(this.props.compact)
            return(
                <div className = 'task'>
                    <label className = 'timeLeft'
                        style = {{'backgroundColor': color, 'color': textColor}}
                    > {diff + ' days left'} </label>   
                </div>
            )
        return(
            <div className = 'task'>
                <label className = 'timeLeft'
                    style = {{'backgroundColor': color, 'color': textColor}}
                > {diff + ' days left'} </label>   
                <input 
                    className = 'dateLeftInput'
                    type = 'date' 
                    value = {this.props.date}
                    onChange = {this.props.onChange}    
                ></input>
            </div>
        )
    }   
}

export default TimeLeft;