import React from 'react';
import { Message } from './Message'
import { shallow } from 'enzyme';

describe('Message', () => {
   it('render content', () => {
      const props = {
         name: 'Ivan',
         content: 'Hello'
      }

      const element = shallow(<Message {...props}/>)
      expect(element).toMatchSnapshot();
   })
})