import React from 'react'

const ListItem = (props) => {
        return(
            <div>
                <li>
                    <input type='number'>{props.quantity}</input>
                    
                </li>
            </div>
        )
    }
    
//map the groceries array, each item.item is the <p> and item.quantity is the auto fill of the input

export default ListItem;