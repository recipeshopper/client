import React from 'react';
import { SignInWrapper, Form, Input, Button } from '../Styles.js';

const SignInForm = () => {
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
        <Button>Submit</Button>
      </Form>
    </SignInWrapper>
  )
}
export default SignInForm;
