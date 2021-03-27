import React, {useState} from 'react';
//import styled from 'styled-components';
import './add-form.css';


let items = [];
export const AddForm = () =>{

    const [obj, setObj] = useState({item : '', checked : false, id : 1 })
    const onFormChange = ({value , name})=>{
        setObj({...obj, [name] : value});
    } 
 

    const onButtonClick = () =>{
        items.push(obj)
        setObj({item : '', checked : false, id : Date.now()});
    }

    const onDeleteClick = (id) =>{
        items = items.filter(item => item.id !== Number(id));
        setObj({item : '', checked : false, id : Date.now()});
    }

    const onCheckBox = (id) =>{
        const index = items.findIndex(item => item.id === Number(id));
        console.log(index)
        items[index].checked = !items[index].checked;
    }
    

    const itemList = items.map(e => {
        if(e.item !=='')
        return(
            <div className = 'item'>
                <div>
                    <input type = 'checkbox' className = 'add-checkbox'  id = {e.id} onClick = {(event) => onCheckBox(event.target.id)}/>
                </div>
                <div>
                    <p className = 'text-item'>{e.item}</p>
                </div>
                <div>
                    <img className = 'delete-item'  id = {e.id} onClick = {(event) => onDeleteClick(event.target.id)} src = "https://cdn4.iconfinder.com/data/icons/business-finance-vol-12-2/512/25-512.png" />
                </div>
            </div>
        )
    })

    return(
        <div className = 'add-form'>
            <div className = 'header'>
                <h2> todos </h2>
                <div className = 'input-button'>
                    <div className = 'add-input'>
                            <input type = 'text' name = 'item' id = 'item' placeholder = 'what would you like to do ?'
                            onChange ={(event) => onFormChange(event.target)} value = {obj.item}/>
                    </div>
                    <button type = 'button' className = 'add-button' onClick = {onButtonClick}>add item</button> 
                </div>
            </div>
            <ul className = 'itemlist'>{itemList}</ul>       

        </div>
    )
    
}
