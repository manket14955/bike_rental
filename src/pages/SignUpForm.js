import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';
class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      fname: '',
      lname: '',
      hasAgreed: false,
      isEnabled: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let iobject = {};
    if (target.type === 'checkbox') {
      iobject['hasAgreed'] = target.checked;
      iobject['isEnabled'] = target.checked;
      console.log(target.checked);
    } else {

      iobject[target.id] = target.value;

    }
    this.setState(iobject);
  }

  handleSubmit(e) {
      
    // should be taken to sign-in page after register

    }
  }
  canBeSubmitted() {
    const { email, password, fname, lname, hasAgreed } = this.state;
    return email.length > 0 && password.length > 6 && fname.length > 0 && lname.length && hasAgreed === true;
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
          
        //it should have fields like first name, last name, email, password, checkbox for terms and conditions, submit button
        
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;