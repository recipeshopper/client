import React, { Component } from 'react';
import { SignInWrapper, Form, Input, Button } from '../styledComponents.js';

class SignInForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      signUp: true,
    }
  }
  render() {
    return (
      <SignInWrapper>
        <Form>
          <Input
          type='text'
          name='username'
          placeholder='username'
          value=''
          />
          <Input
          type='password'
          name='password'
          placeholder='password'
          value=''
          />
          <Button>
          {this.state.signUp ? 'Sign Up' : 'Log In'}
          </Button>
        </Form>
      </SignInWrapper>
    )
  }

}
export default SignInForm;
