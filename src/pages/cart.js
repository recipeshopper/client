import React from 'react'
import { Link } from 'gatsby'
import ListItem from '../components/ListItem';
import { connect } from 'react-redux';
import {deleter, quantityUpdate } from '../components/actions/actions'
import AddForm from '../components/AddForm';

import Nav from '../components/nav';
import Layout from '../components/layout'


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
            <Layout>
                <div className='c-container'>
                    <div className='c-wrapper'>
                        <div className="c-item-list">
                        {this.props.groceries.map(item=>{
                            return <ListItem key={item.ingredient} inputHandler={this.inputHandler} ingredient={item.ingredient} amount={item.amount} delete={()=> this.props.deleter(item.ingredient)} />
                        })}
                        </div>
                    </div>
                    <div>price</div>
                </div>
            </Layout>
        )
    }
}
    
const mapStateToProps = (state) => {
    return {
        groceries: state.groceries 
    }
}

export default connect(mapStateToProps, {deleter, quantityUpdate})(ReviewList);
