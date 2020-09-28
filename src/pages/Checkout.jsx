import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar.jsx';
import queryString from 'query-string';

class Checkout extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    // console.log(this.props.bikes);
    let bike = this.props.location.bike;
    console.log(bike.name)
    this.state = {

    };

    this.confirmClick = this.confirmClick.bind(this);
    this.goBackClick = this.goBackClick.bind(this);
  }

  confirmClick() {
    this.props.history.push(
      {pathname :"/myBookings",
      bike:this.props.location.bike}
      );
  }

  goBackClick() {
    this.props.history.push("/home");
  }

  render() {
    let btnstyle = "10px 0%";
    let bike = this.props.location.bike;
    return (
      <div>
      <NavBar/>
         <Card className="Card">
          <CardImg top width="100%" src={bike.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{bike.name}</CardTitle>
            <CardSubtitle>{bike.model}</CardSubtitle>
            <CardText>{bike.description}</CardText>
            <Button size={btnstyle} onClick={this.confirmClick}>Confirm</Button>
            <Button size={btnstyle} onClick={this.goBackClick}>Go back</Button>

          </CardBody>
        </Card>

      </div>
    );
  }
}
export default Checkout;


        // should have a NavBar component
        // should display Card with the details of the bike which is selected. It should have two buttons i.e, confirm booking button and go back buttton
