import React, { Children } from 'react';
import { mount, shallow} from 'enzyme';
import Controller from './Controller'


 

describe('Controller Component tests', () => {

    let container = shallow(<Controller setTimeSec={jest.fn} />);

    it('should render a div', () => {

expect(container.find('div').length).toEqual(1);
    });

     it('should render 3 buttons', () => {

expect(container.find('button').length).toEqual(3);
    });

       it('should render Start buttons', () => {
    expect(container.find('button').at(0).text()
).toEqual('Start')
    });

           it('should render Stop buttons', () => {
    expect(container.find('button').at(1).text()
).toEqual('Stop')
    });

       it('should render Reset buttons', () => {
    expect(container.find('button').at(2).text()
).toEqual('Reset')
    });



});

 

     
