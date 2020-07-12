import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BikesCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.props.bikes)
    this.props.propdata.history.push(`/Checkout`)
  }

  render() {
    return (
      <div>
        <Card className="Card">
          <CardImg top width="100%" src={this.props.bikes.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.bikes.name}</CardTitle>
            <CardSubtitle>{this.props.bikes.model}</CardSubtitle>
            <CardText>{this.props.bikes.description}</CardText>
            <Button onClick={this.handleClick}>Book</Button>
          </CardBody>
        </Card>
      </div>
    )
  }

}

export default BikesCard; 