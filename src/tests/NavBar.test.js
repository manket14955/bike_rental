import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from '../pages/NavBar.jsx';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

configure({ adapter: new Adapter() });



describe("testing NavBar component", () => {
  let wrapper;
  const mockfn1 = jest.fn();

  test("checking the NavBar NavLink router content", () => {
    const wrapper = shallow(
      <NavBar
      />
    );
    const signIn = wrapper.find("NavLink").at(0);
    expect(signIn.props().to).toEqual("/sign-in/");

  });

});