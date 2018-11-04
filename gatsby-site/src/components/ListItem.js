import React from 'react';
import { Form, Input, Wrapper, Label, DeleteSpan, Note } from './styledComponents';

const ListItem = (props) => {
    const input = (e) => {
        console.log(e.target.value)
        props.inputHandler(props.ingredient, e.target.value)
    }

        return(
            <Wrapper>
                <Form list='true'>
                    <Label >
                    <Input list='true' type="number" defaultValue={props.amount} onChange={input}
                      step='0.5'
                      min='0'/>
                    <p>{props.ingredient}</p>
                    <DeleteSpan onClick={props.delete}>X</DeleteSpan>
                    <Note>current state: {props.amount}</Note>
                    </Label>
                </Form>
            </Wrapper>
        )
    }

    export default ListItem;
