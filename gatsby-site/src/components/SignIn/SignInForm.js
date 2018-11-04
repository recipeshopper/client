import React, { Component } from 'react';
import { SignInWrapper, SubHeader, Form, Input, Button } from '../styledComponents.js';

class SignInForm extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <SignInWrapper>
        <Form signIn='true'>
        <SubHeader>
          {this.props.newUser ? 'Welcome! Please create a username and password' : 'Welcome back! Please login'}
        </SubHeader>
          <Input
          type='text'
          name='username'
          placeholder='username'
          defaultValue=''
          />
          <Input
          type='password'
          name='password'
          placeholder='password'
          defaultValue=''
          />
          <Button>
          {this.props.newUser ? 'Sign Up' : 'Log In'}
          </Button>
        </Form>
      </SignInWrapper>
    )
  }

}
export default SignInForm;
