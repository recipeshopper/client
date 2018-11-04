import React from 'react';
import { SignInLanding, SignInForm } from '../components/SignIn';

const AuthLanding = () => {
  return (
    <div className='wrapper'>
    <SignInLanding />
    <SignInForm />
    </div>
  )
};

export default AuthLanding;
