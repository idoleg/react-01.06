import React from 'react';
import { Message } from './Message';
import { shallow } from 'enzyme';

describe('Message.jsx', () => {
    it('render contetn', () => {
        const props = {
            name: "Ivan",
            content: "Hello!"
        }

        const element = shallow(<Message {...props} />);
        expect(element).toMatchSnapshot();
    })

    it('render message with robot css class', () => {
        const props = {
            name: "Robot",
            content: "Hello!"
        }

        const element = shallow(<Message {...props} />);
        expect(element).toMatchSnapshot();
    })
})