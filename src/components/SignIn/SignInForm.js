import React, { Component } from 'react';
import { SignInWrapper, Form, Input, Button } from '../styledComponents.js';

export default class SignInForm extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <SignInWrapper>
        <Form>
        <h2>
          {this.props.newUser ? 'Welcome! Please create a username and password' : 'Welcome back! Please login'}
        </h2>
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