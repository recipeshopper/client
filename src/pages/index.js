import React from 'react';
import { SignInLanding, SignInForm } from '../components/SignIn';
import { PrivateRoute } from 'gatsby';
import { login, signUp } from '../components/actions/actions';
import { connect } from 'react-redux';
import axios from 'axios';

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newUser: false,
      returningUser: false,
    }
  }

  signUpClickHandler = () => {
    this.setState({
      newUser: true,
    })
  }

  loginClickHandler = () => {
    this.setState({
      returningUser: true,
    });
  }



  render(){
    if (this.props.isLoggedIn){
      console.log(this.props);
      this.props.navigate('/list'); 
    }
    return (
      <div className='wrapper'>
        { (!this.props.isLoggedIn && !this.state.newUser && !this.state.returningUser) ?
          <SignInLanding signupClick={this.signUpClickHandler} loginClick={this.loginClickHandler}/>
        : null }
      { (this.state.newUser || this.state.returningUser) ?
        <SignInForm newUser={this.state.newUser} login={this.props.login} signUp={this.props.signUp}/> : null }
      </div>
    )
  }

};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
}

export default connect(
  mapStateToProps,
  { login, signUp }
)(IndexPage);
