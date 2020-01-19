import Square from '../Components/Square'
import { shallow, mount,configure } from 'enzyme';
import expect from 'expect';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { create } from "react-test-renderer";

 configure({ adapter: new Adapter() });


it('Should be  "square" before click', () => {
  const component = create(<Square class={'square'}  field={true}  clicked={false} xPos={0} yPos={0}/>);
  const instance = component.getInstance();

  expect(instance.state.class).toBe('square')
})

it('Should be "clickedSquare" after click', () => {
  const component = create(<Square class={'square'}  field={true}  clicked={false} xPos={0} yPos={0}/>);
  const instance = component.getInstance();
  instance.handleClick();

  expect(instance.state.class).toBe('clickedSquare')
})

it('Should be "square" after clicking twice', () => {
  const component = create(<Square class={'square'}  field={true}  clicked={false} xPos={0} yPos={0}/>);
  const instance = component.getInstance();
  instance.handleClick();
  instance.handleClick();

  expect(instance.state.class).toBe('clickedSquare')
})





