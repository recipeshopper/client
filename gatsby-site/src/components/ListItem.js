import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Label, DeleteSpan, Wrapper } from './styledComponents';

const ListItem = (props) => {
        return(
            <Wrapper>
                <Form>
                    <Label>
                    <Input list='true' type="number" defaultValue={props.amount}></Input>
                    {props.ingredient}
                    <DeleteSpan onClick={props.deleter}>X</DeleteSpan>
                    </Label>
                </Form>
            </Wrapper>
        )
    }

    export default ListItem;
