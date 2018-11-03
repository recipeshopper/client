import React from 'react'
import { Link } from 'gatsby'
import ListItem from '../components/ListItem';


class ReviewList extends React.Component {
    constructor(){
        super();
        this.state={
            groceries: [ {item: "banana", quantity: 3}, {item: "orange", quantity: 1}, ]
        }
    }

    render(){
        return(
            <div>
                <h1>Recipe Shopper</h1>
                <h3>Your Basket</h3>
                <div className="item-list">
                    {this.state.groceries.map(item =>{
                        return <ListItem obj={item} key={Date.now()} />
                    })}
                </div>
                <h1>Get your groceries</h1>
                <Link to="/checkout">Checkout</Link>
            </div>
        )
    }
}
    
//map the groceries array, each item.item is the <p> and item.quantity is the auto fill of the input



export default ReviewList;
