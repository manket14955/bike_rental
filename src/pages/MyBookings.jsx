import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import NavBar from './NavBar.jsx';
class MyBookings extends Component {

  constructor(props) {
    super(props);
    this.unbook = this.unbook.bind(this);
    this.state = {

    }
  }

  unbook() {
    alert("Successfully Unbooked");
    this.props.history.push("/myBookings1");
  }

  render() {
    let btnstyle = "10px 0%";
    return (
      <div>
        <div><NavBar sendprops={this.props} /></div>
        <br />
        <Card style={{ backgroundColor: '#ffffffe0' }}>
          <CardImg height="600px" src={this.state.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.state.name}</CardTitle>
            <CardSubtitle>{this.state.model}</CardSubtitle>
            <CardText>{this.state.description}</CardText>
            <Button onClick={this.unbook} style={{ margin: btnstyle }} color="danger">Unbook</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default MyBookings;




