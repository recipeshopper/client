import React from 'react'
import { Link } from 'gatsby'


class ReviewList extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h1>Get your groceries</h1>
                <Link to="/checkout">Checkout</Link>
            </div>
        )
    }
}
    


export default ReviewList;
