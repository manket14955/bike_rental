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
      <NavBar/>
         <Card className="Card">
          <CardImg top width="100%" src={this.props.bikes.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.bikes.name}</CardTitle>
            <CardSubtitle>{this.props.bikes.model}</CardSubtitle>
            <CardText>{this.props.bikes.description}</CardText>
            <Button onClick={this.confirmClick}>Confirm</Button>
            <Button onClick={this.goBackClick}>Go back</Button>

          </CardBody>
        </Card>

      </div>
    );
  }
}
export default Checkout;


        // should have a NavBar component
        // should display Card with the details of the bike which is selected. It should have two buttons i.e, confirm booking button and go back buttton
