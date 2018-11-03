import React, { Component } from 'react';
import { SignInWrapper, Button } from '../styledComponents.js';



class SignInLanding extends Component {
  render() {
    return (
      <SignInWrapper>
      <h1>RecipeShopper</h1>
      <Button>Sign Up</Button>
      <Button>Log In</Button>
      </SignInWrapper>
    )
  }
}

export default SignInLanding;
