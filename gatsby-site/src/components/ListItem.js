import React from 'react';
import { Form, Input } from './styledComponents';

const ListItem = (props) => {
    const input = (e) => {
        console.log(e.target.value)
        props.inputHandler(props.ingredient, e.target.value)
    }

        return(
            <div>
                <Form>
                    <label>
                    <Input type="number" defaultValue={props.amount} onChange={input}></Input>
                    {props.ingredient}
                    <h2>current state: {props.amount}</h2>
                    <span onClick={props.delete}>X</span>
                    </label>
                </Form>
            </div>
        )
    }

    export default ListItem;
