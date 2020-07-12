import React from 'react';
import { shallow } from 'enzyme';
import Home from '../pages/home2';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("testing Home component", () => {
  let wrapper;
  test("checking home content", () => {
    const wrapper = shallow(<Home />);
    console.log(wrapper.text())
    const NavBar = wrapper.find("NavBar").at(0);
    expect(NavBar.length).toEqual(1);
    const DatePicker = wrapper.find("DatePicker").at(0);
    expect(DatePicker.length).toEqual(1);
    const Button = wrapper.find("button").at(0);
    expect(Button.length).toEqual(1);
  });

});

