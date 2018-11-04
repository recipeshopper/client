import React, { Component } from 'react';
import { SignInWrapper, Button } from '../styledComponents.js';



class SignInLanding extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <SignInWrapper>
      <h1>RecipeShopper</h1>
      <Button onClick={this.props.signupClick}>Sign Up</Button>
      <Button onClick={this.props.loginClick}>Log In</Button>
      </SignInWrapper>
    )
  }
}

export default SignInLanding;
