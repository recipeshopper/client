import React from 'react'
import { connect } from 'react-redux';
import { addItem } from '../components/actions/actions'


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
            <form onSubmit={this.submit} >
                <label> Ingredient
                    <input onChange={this.handleChange} name="ingredient" type="text" placeholder="ingredient" value={this.state.ingredient}>
                    </input>
                </label>
                <label>Amount
                    <input onChange={this.handleChange} name="amount" type="number" value={this.state.amount}>
                    </input>
                </label>
                <label>Unit
                    <input onChange={this.handleChange} name="unit" type="text" placeholder="Unit" value={this.state.unit}>
                    </input>
                </label>
                <button>Add Item</button>
            </form>
        )
        }
    }

const mapStateToProps = (state) => {
    return {
        groceries: state.groceries
    }
}

export default connect(mapStateToProps, {addItem})(AddForm);
