import React, { Component } from "react";
import NavBar from './NavBar.jsx';
import { Link } from 'react-router-dom';

class MyBookings1 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div><NavBar sendprops={this.props} /></div>
        <p><br /><br /></p>
        <div style={{ color: "rgb(28, 45, 44)" }}>
          <p>
            <h3>You have no current bookings...!!!</h3>
            <ul>
              <li><Link to="/home">Click here to book</Link></li>
              <li><Link to="/sign-in">Logout</Link></li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
}
export default MyBookings1