import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
//import Button from '../components/Button';

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {

    // should be taken to home page upon login
    }

  }
  canBeSubmitted() {
    const { email, password } = this.state;
    return email.length > 0 && password.length > 6;
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    return (

      <div className="FormCenter">

        <div className="FormTitle">
          <NavLink to="/sign-in" className="FormTitle__Link">Login</NavLink> or
          <NavLink exact to="/" className="FormTitle__Link">Register</NavLink>
        </div>

        <form onSubmit={this.handleSubmit} className="FormFields">
          
        //it should have fields like first email, password and submit button
        
        </form>
      </div>

    );
  }
}

export default SignInForm;