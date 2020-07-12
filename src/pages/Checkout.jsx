import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar.jsx';

class Checkout extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.bikes);
    this.state = {

    };

    this.confirmClick = this.confirmClick.bind(this);
    this.goBackClick = this.goBackClick.bind(this);
  }

  confirmClick() {
    this.props.history.push("/myBookings");
  }

  goBackClick() {
    this.props.history.push("/home");
  }

  render() {
    let btnstyle = "10px 0%";
    return (
      <div>
        
        // should have a NavBar component
        // should display Card with the details of the bike which is selected. It should have two buttons i.e, confirm booking button and go back buttton
        
      </div>
    );
  }
}
export default Checkout;