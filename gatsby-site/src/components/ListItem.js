import React from 'react';
import { connect } from 'react-redux';

const ListItem = (props) => {
        return(
            <div>
                <div>
                    <input type='number'>{props.amount}</input>
                    <p>{props.ingredient}</p>
                    HI
                </div>
                <p onClick={props.deleter}>X</p>
            </div>
        )
    }

    export default ListItem;