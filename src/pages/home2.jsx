import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from './NavBar.jsx';
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleClick() {
    this.props.history.push("/mainArea");
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
  }

  render() {
    return (
      <div>
      
        // should have a NavBar component
        // should have a DatePicker component which is used to select the start and end dates
        // should have a button for searching the bikes based on the dates entered 
        
      </div>

    );
  }
}

export default Home;
