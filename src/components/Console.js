import React from 'react';
import './Console.css';
class Console extends React.Component
{
    render(){
        return(
            <div className="ConsoleWrapper">
                <input className="ConsoleInput" type="text"></input>
            </div>
        );
    }
}

export default Console; 