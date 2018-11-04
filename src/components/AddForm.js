import React from 'react'
import { connect } from 'react-redux';
import { addItem } from '../components/actions/actions';
import { Form, Input, Button, Label } from './styledComponents';


class AddForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ingredient: '',
            amount: '',
            unit: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.ingredient, this.state.amount, this.state.unit);
        this.setState({
          ingredient: '',
          amount: '',
          unit: '',
        })
    }

    render(){
        return(
            <Form onSubmit={this.submit} add='true' >
                <Label > Ingredient
                    <Input onChange={this.handleChange} name="ingredient" type="text" placeholder="ingredient" value={this.state.ingredient}>
                    </Input>
                </Label>
                <Label>Amount
                    <Input onChange={this.handleChange} name="amount" type="number" value={this.state.amount}>
                    </Input>
                </Label>
                <Label >Unit
                    <Input onChange={this.handleChange} name="unit" type="text" placeholder="Unit" value={this.state.unit}>
                    </Input>
                </Label>
                <Button>Add Item</Button>
            </Form>
        )
        }
    }

const mapStateToProps = (state) => {
    return {
        groceries: state.groceries
    }
}

export default connect(mapStateToProps, {addItem})(AddForm);
