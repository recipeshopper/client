import React, { Component } from 'react';
import { SignInWrapper, SubHeader, Form, Input, Button } from '../styledComponents.js';

class SignInForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
    }

  }

  inputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
}
    handleSubmit = event => {
      event.preventDefault();
      if (this.props.newUser){
        this.props.signUp(this.state.username, this.state.password);
        this.setState({
          username: '',
          password: '',
        })
        // window.location.reload();
      } else {
        this.props.login(this.state.username, this.state.password);
        // window.location.reload();
      }
    }


  render() {
    return (
      <SignInWrapper>
        <Form signIn='true' onSubmit={this.handleSubmit}>
        <h2>
          {this.props.newUser ? 'Welcome! Please create a username and password' : 'Welcome back! Please login'}
        </SubHeader>
          <Input
          type='text'
          name='username'
          placeholder='username'
          value={this.state.username}
          onChange={this.inputHandler}
          />
          <Input
          type='password'
          name='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.inputHandler}
          />
        <Button type='submit'>
          {this.props.newUser ? 'Sign Up' : 'Log In'}
          </Button>
        </Form>
      </SignInWrapper>
    )
  }

}
export default SignInForm;
