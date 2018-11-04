import React from 'react';
import '../global.css';

const ListItem = (props) => {
    const input = (e) => {
        console.log(e.target.value)
        props.inputHandler(props.ingredient, e.target.value)
    }

        return(
            <div className='l-container'>
                <div className='l-wrapper'>
                    <span className='l-delete' onClick={props.delete}/>
                    <div style={{ width: '50%' }}/>
                    <h3 className='l-ingredientFont'> {props.ingredient} </h3>
                    <div style={{ width: '100%' }}/>
                    <input className='l-amountBoxStyle' type="number" defaultValue={props.amount} onChange={input}></input>
                </div>
            </div>
        )
    }

export default ListItem;