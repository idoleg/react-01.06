import React from 'react';
import { ChatForm } from './ChatForm'
import Button from '@material-ui/core/Button'
import { shallow } from 'enzyme';

describe('ChatForm', () => {
   it('render content', () => {
     const element = shallow(<ChatForm/>);
     expect(element).toMatchSnapshot();
   })

   it('simulate', () => {
      const name = 'Ivan';
      const content = 'Test';
      const props = {
         onSendMessage: jest.fn(),
      }
      const element = shallow(<ChatForm {...props} />);
      element.find({label: "Name"}).at(0).simulate('change', { target: { value: name }});
      element.find({label: "Content"}).at(0).simulate('change', { target: { value: content }})
      element.find(Button).simulate('click', {preventDefault: () => {}})
      expect(props.onSendMessage).toHaveBeenCalledTimes(1);
      expect(props.onSendMessage).toHaveBeenCalledWith({ name, content })
    })
})