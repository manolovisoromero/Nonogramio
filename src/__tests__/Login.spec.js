import Login from '../Screens/Login'
import App from '../App.js'
import { shallow, mount,configure } from 'enzyme';
import expect from 'expect';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { create } from "react-test-renderer";

 configure({ adapter: new Adapter() });


it('Alertmsg should be "Wrong credentials"', () => {
  const component = create(<Login />);
  const instance = component.getInstance();
  instance.state.username = 'sdsds';
  instance.state.password = 'sdssdsd';
  instance.loginPost();

  expect(instance.state.alertMsg).toBe('Wrong credentials')
})

it('Loggedin should be true', () => {
  const app = create(<App/>)
  const component = create(<Login onLoginClicked={app.getInstance().onLoginClicked}/>);
  const instance = component.getInstance();
  instance.state.username = 'test';
  instance.state.password = 'changed';
  instance.loginPost();

  expect(app.getInstance().state.isLoggedin).toBeTruthy();
})



