import React from 'react'
import { Link } from 'gatsby'
import ListItem from '../components/ListItem';
import { connect } from 'react-redux';
import {deleter} from '../components/actions/actions'


const ReviewList = (props) => {
        return(
            <div>
                <h1>Recipe Shopper</h1>
                <h3>Your Basket</h3>
                <div className="item-list">
                    {props.groceries.map(item =>{
                        return <ListItem key={item.ingredient} delete={()=>this.props.deleter(item.id)} id={item.id} amount={item.amount} grocery={item.ingredient} unit={item.unit} />
                    })}
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
