import React from 'react'
import { Link } from 'gatsby'
import ListItem from '../components/ListItem';
import { connect } from 'react-redux';
import {deleter, quantityUpdate } from '../components/actions/actions'
import AddForm from '../components/AddForm';
import { Header, SubHeader, Button, Wrapper } from '../components/styledComponents';


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
        })
        this.props.quantityUpdate(ingredient, value);
    }

    render(){
        return(
            <Wrapper>
                <Header>Recipe Shopper</Header>
              <SubHeader>Your Basket</SubHeader>
                <div className="item-list">
                {this.props.groceries.map(item=>{
                    return <ListItem key={item.ingredient} inputHandler={this.inputHandler} unit={item.unit} ingredient={item.ingredient} amount={item.amount} delete={()=> this.props.deleter(item.ingredient)} />
                })}
                </div>
                <SubHeader>Forget something?</SubHeader>
                    <AddForm />
                  <Header>Get your groceries</Header>
                <Link to="/checkout">
                  <Button>Checkout</Button>
              </Link>
            </Wrapper>
        )
        }
    }

const mapStateToProps = (state) => {
    return {
        groceries: state.groceries
    }
}

export default connect(mapStateToProps, {deleter, quantityUpdate})(ReviewList);
