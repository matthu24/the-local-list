import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveNewProps(nextProps){
    if(nextProps.loggedIn){
      this.props.history.push('/');
    }
  }

  handleSubmit(e){
    e.preventDefault();
    //fire action creator that will make ajax call
    this.props.signup(this.state);
  }

  update(field){
    return(e) => {
      this.setState({[field]: e.target.value})
    }
  }

  render(){
    return(
      <div>
        <form className="signup-form">
          <h3>Sign up for a fan account</h3>
          <label htmlFor="username">Username
            <input type="text" value={this.state.username} onChange={this.update("username")}/>
          </label>

          <br/>
          <label htmlFor="password">Password
            <input type="password" value={this.state.password} onChange={this.update("password")}/>
          </label>

          <br/>
          <button className="signup-button" onClick={this.handleSubmit}>Sign up</button>
        </form>
      </div>
    )
  }


}
