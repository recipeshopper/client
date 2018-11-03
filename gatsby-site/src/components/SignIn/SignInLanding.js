import React, { Component } from 'react';
import styled from 'styled-components';

const SignInWrapper = styled.div `
  background: black;
  color: white;
  width: 100%;
`;

const Button = styled.button `
  background: black;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 10px;
  border: 1px solid white;
  border-radius: 3px;
`;

class SignInLanding extends Component {
  render() {
    return (
      <SignInWrapper>
      <h1>Welcome</h1>
      <Button>Sign Up</Button>
      <Button>Log In</Button>
      </SignInWrapper>
    )
  }
}

export default SignInLanding;
