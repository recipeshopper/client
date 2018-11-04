import React from 'react';
import { connect } from 'react-redux';
import { Form, Input } from './styledComponents';

const ListItem = (props) => {
        return(
            <div>
                <Form> 
                    <label> 
                    <Input type="number" defaultValue={props.amount}></Input>
                    {props.ingredient}
                    <span onClick={props.deleter}>X</span>
                    </label>
                </Form>
            </div>
        )
    }

    export default ListItem;