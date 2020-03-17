import React from 'react';
import './Cat.css';

const cat = (props) => {
    return(
        <div className = "Cat">
            <p onClick = {props.click}> This is {props.name}, I am a {props.breed} kitten and I come from {props.place} city.</p>
            <p> {props.children} </p>
            <input type = "text" value = {props.breed} onChange = {props.change}/>        
        </div>
    )

}

export default cat;

