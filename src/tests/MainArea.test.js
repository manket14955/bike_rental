import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainArea from '../pages/MainArea'

configure({ adapter: new Adapter() });

describe("testing  MainArea", () => {
  
  let wrapper;
  
  test("checking MainArea content", () => {
    const wrapper = shallow(<MainArea />);
    console.log(wrapper.text())
    const NavBar = wrapper.find("NavBar").at(0);
    expect(NavBar.length).toEqual(1);
    const Container = wrapper.find("Container").at(0);
    expect(Container.length).toEqual(1);
  });

});
