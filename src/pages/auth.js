import React from 'react';
import { SignInLanding, SignInForm } from '../components/SignIn';

class AuthLanding extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newUser: false,
      returningUser: false,
    }
  }

  signUpHandler = () => {
    this.setState({
      newUser: true,
    })
  }

  loginHandler = () => {
    this.setState({
      returningUser: true,
    })
  }

  render(){
    return (
      <div className='wrapper'>
        { (!this.state.newUser && !this.state.returningUser) ?
          <SignInLanding signupClick={this.signUpHandler} loginClick={this.loginHandler}/>
        : null }
      { (this.state.newUser || this.state.returningUser) ?
        <SignInForm newUser={this.state.newUser} /> : null }
      </div>
    )
  }

};

export default AuthLanding;
