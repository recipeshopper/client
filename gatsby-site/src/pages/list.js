import React from 'react'
import { Link } from 'gatsby'
import ListItem from '../components/ListItem';
import { connect } from 'react-redux';
import {deleter} from '../components/actions/actions'


const ReviewList = props => {
    console.log(props.groceries)
        return(
            <div>
                <h1>Recipe Shopper</h1>
                <h3>Your Basket</h3>
                <div className="item-list">
                {props.groceries.map(item=>{
                    return <ListItem key={item.ingredient} ingredient={item.ingredient} amount={item.amount} />
                })}
                Fake list 
                </div>
                <h1>Get your groceries</h1>
                <Link to="/checkout">Checkout</Link>
            </div>
        )
    }
    
const mapStateToProps = (state) => {
    return {
        groceries: state.groceries 
    }
}

export default connect(mapStateToProps, {deleter})(ReviewList);
