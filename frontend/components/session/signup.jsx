import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: '',password:'', city:''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
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
      <div className="signup-container">
        <form className="signup-form">
          <h3>Sign up </h3>
          <label htmlFor="username">Username
            <input type="text" value={this.state.username} onChange={this.update("username")}/>
          </label>

          <br/>
          <label htmlFor="password">Password
            <input type="password" value={this.state.password} onChange={this.update("password")}/>
          </label>
          <br/>
          <label htmlFor="city">City
            <input type="city" value={this.state.city} onChange={this.update("city")}/>
          </label>

          <br/>
          <button className="signup-button" onClick={this.handleSubmit}>Sign up</button>
        </form>
      </div>
    )
  }


}

export default Signup;
