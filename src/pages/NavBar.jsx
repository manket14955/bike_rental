import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar bg='light'>
          <NavbarBrand> Bike Rentals </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar}/>
          <Collapse isOpen={this.state.collapsed}>
            <Nav className ='out' navbar>
            <NavItem>
              <NavLink to='/sign-in'>Sign-in</NavLink>
            </NavItem>
            </Nav>
          </Collapse>         
        </Navbar>
        
      </div>
    );
  }
}


// should have a Navbar brand, toggler and the NavItem (logout) should be linked to sign-in page