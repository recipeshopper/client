import React from 'react'
import { Link } from 'gatsby'
import ListItem from '../components/ListItem';
import { connect } from 'react-redux';
import {deleter, quantityUpdate } from '../components/actions/actions'
import AddForm from '../components/AddForm';


class ReviewList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            quantity: ''
        }
    }

    inputHandler = (ingredient, value) => {
        this.setState({
            quantity: value
        }, function(){console.log('new', this.state.quantity)}) 
        this.props.quantityUpdate(ingredient, value);
    }

    render(){
        return(
            <div>
                <h1>Recipe Shopper</h1>
                <h3>Your Basket</h3>
                <h3>Forget something?</h3>
                <AddForm />
                <div className="item-list">
                {this.props.groceries.map(item=>{
                    return <ListItem key={item.ingredient} inputHandler={this.inputHandler} ingredient={item.ingredient} amount={item.amount} delete={()=> this.props.deleter(item.ingredient)} />
                })}
                </div>
                <h1>Get your groceries</h1>
                <Link to="/checkout">Checkout</Link>
            </div>
        )
        }
    }
    
const mapStateToProps = (state) => {
    return {
        groceries: state.groceries 
    }
}

export default connect(mapStateToProps, {deleter, quantityUpdate})(ReviewList);
