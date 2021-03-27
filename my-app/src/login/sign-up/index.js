import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './sign-up.css'


export const SignUp = (props) =>{

    const [obj, setObj] = useState({ name : 'user'});
    const onFormChange = ({value , name})=>{
        setObj({...obj, [name] : value});
    }    
    
    
    
    return(
        <form >
            <div className = 'form-inner' >
                <h2 className = 'welcome'> Welcome </h2>
                <div >
                    <input  type = 'text' name = 'name' id = 'name' placeholder = 'write your name'
                     onChange ={(event) => onFormChange(event.target)} value = {obj.mail}/>
                </div>
                <div >
                     <Link to = "/signup"> <button className = 'signup-button' type = 'button' onClick = {() => props.onButtonClick(obj.name)}>let's go</button> </Link>
                </div>
            </div>
        </form>
    )
}