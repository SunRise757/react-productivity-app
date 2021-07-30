import './App.css';
import React from 'react';

class TimeLeft extends React.Component{   
    
    render(){ 
        let dueDate = new Date(this.props.date);
        let curDate = new Date();
        var diff =  Math.ceil(( dueDate - curDate ) / 86400000); 
        

        console.log(this.props.date)
        if(this.props.compact)
            return(
                //<input type = 'checkbox'> kek </input>
                <div className = 'task'>

                    <label className = 'timeLeft'> {diff + ' days left'} </label>   
                    {/*<input type = 'date'></input>*/}
                </div>
            )
        return(
            //<input type = 'checkbox'> kek </input>
            <div className = 'task'>
                <label className = 'timeLeft'> {diff + ' days left'} </label>   
                <input 
                    type = 'date' 
                    value = {this.props.date}
                    onChange = {this.props.onChange}    
                ></input>
            </div>
        )
    }   
}

export default TimeLeft;