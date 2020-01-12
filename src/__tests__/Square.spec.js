import Square from '../Components/Square'
import React from 'react';
import { create } from "react-test-renderer";
import {mount} from 'enzyme';


describe("Sqaure Component", () => {
    test("Labelsquare render", () => {
      const button = create(<Square clas={'labelSquare'}  value={1} />);
      expect(button.toJSON()).toMatchSnapshot();
    });

    test("Field square render ", () => {
        const button = create(<Square clas={'square'}  field={true} />);
        expect(button.toJSON()).toMatchSnapshot();
      });
    
  });



