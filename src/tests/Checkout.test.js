import React from 'react';
import { shallow } from 'enzyme';
import Checkout from '../pages/Checkout';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("testing Checkout component", () => {
  
  let wrapper;
  
  test("checking Checkout content", () => {
    const wrapper = shallow(<Checkout />);
    console.log(wrapper.text())
    const NavBar = wrapper.find("NavBar").at(0);
    expect(NavBar.length).toEqual(1);
    const Card = wrapper.find("Card").at(0);
    expect(Card.length).toEqual(1);
  });

});