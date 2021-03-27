import React from 'react';
import {AddForm} from '../add-form/index';
import {Link} from "react-router-dom";
import './main-form.css';


export const MainForm = ( props ) =>{

    const name = props.name;

    return(
        <div className = 'main-form'>
            <h2 className = 'hello'> Hello, {name} </h2>
            <AddForm/>
           <Link to = "/"><button className = 'logout-button'> log out </button> </Link>
        </div>
    )
}