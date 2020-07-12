import React, { Component } from 'react';
import BikesCard from './BikesCard.jsx';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './NavBar.jsx';
import Bike from './Data.js';

class MainArea extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      bike: Bike
    }
  }
  render() {
    let bikeCards = this.state.bike.map(bikes => {
      return (
        <Col sm="4" style={{ marginBottom: 10 }}>
          <BikesCard bikes={bikes} propdata={this.props} />
        </Col>
      )
    }
    )
    return (
      <div>
      
        // should have a NavBar component
        // should display the list of bikes
        
      </div>

    );

  }
}
export default MainArea;