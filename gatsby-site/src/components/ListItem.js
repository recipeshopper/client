import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { Form, Input, Label, DeleteSpan, Wrapper } from './styledComponents';
=======
import { Form, Input } from './styledComponents';
>>>>>>> b1dc53e9692d120875ad5229abdb9679a5e98c1a

const ListItem = (props) => {
    const input = (e) => {
        console.log(e.target.value)
        props.inputHandler(props.ingredient, e.target.value)
    }

        return(
<<<<<<< HEAD
            <Wrapper>
                <Form>
                    <Label>
                    <Input list='true' type="number" defaultValue={props.amount}></Input>
                    {props.ingredient}
                    <DeleteSpan onClick={props.deleter}>X</DeleteSpan>
                    </Label>
=======
            <div>
                <Form> 
                    <label> 
                    <Input type="number" defaultValue={props.amount} onChange={input}></Input>
                    {props.ingredient}
                    <h2>current state: {props.amount}</h2>
                    <span onClick={props.delete}>X</span>
                    </label>
>>>>>>> b1dc53e9692d120875ad5229abdb9679a5e98c1a
                </Form>
            </Wrapper>
        )
    }

    export default ListItem;
