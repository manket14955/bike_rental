import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
import SignInForm from '../pages/SignInForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe('SignInForm', () => {
  
  let wrapper;
  beforeEach(() => wrapper = shallow(<SignInForm />));

  it('should render six <div />', () => {
    expect(wrapper.find('div').length).toEqual(5);
  });

  it('calls submit function when form is submitted', () => {
    const submitMe = jest.fn();
    const wrapper = mount(<form onSubmit={submitMe} />);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(submitMe).toHaveBeenCalledTimes(1);
  });

  it('should render one <form>', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });
  it('should render four <label>s', () => {
    expect(wrapper.find('label')).toHaveLength(2);
  });
  it('should render four <input>s', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });
  it('renders a fname input', () => {
    expect(shallow(<SignInForm />).find('#email').length).toEqual(1)
  })
  it('renders a lname input', () => {
    expect(shallow(<SignInForm />).find('#password').length).toEqual(1)
  })
  it('should change the state of the Login Component', () => {
    wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'blah@gmail.com' } });
    expect(wrapper.state('email')).toEqual('blah@gmail.com');
  })

  it('should change the state of the Login Component', () => {
    wrapper.find('#password').simulate('change', { target: { name: 'password', value: 'blah' } });
    expect(wrapper.state('password')).toEqual('blah');
  })
})