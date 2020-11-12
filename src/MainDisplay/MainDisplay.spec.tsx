import React, { Children } from 'react';
import {shallow} from 'enzyme';
import MainDisplay from './MainDispaly';




describe('Controller Component tests', () => {

    let container = shallow(<MainDisplay />);

    it('should render adiv', () => {

expect(container.find('div').length).toEqual(2);
    });

     it('should render 3 p tags', () => {

expect(container.find('p').length).toEqual(3);
    });

     it('should render 3 p tags', () => {
expect(container.find('Controller').length).toEqual(1);
    });

});



