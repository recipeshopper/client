import React from 'react'
import { Link } from 'gatsby'

class IndexPage extends React.Component{
  constructor(){
    super();
    this.state={
      groceries: []
    }
  }

  render(){
    return(
      <div>
          <h1>Get your groceries</h1>
          <Link to="/list">Login</Link>
      </div>
    )
  }
}



export default IndexPage;
