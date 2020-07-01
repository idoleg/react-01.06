import React from 'react';
import { ChatForm } from './ChatForm';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';

describe('ChatForm', () => {
    it('render content', () => {
        const element = shallow(<ChatForm onSendMessage={() => { }} />);
        expect(element).toMatchSnapshot();
    })

    it('simuldate events', () => {
        const name = "Оля";
        const content = "Test";
        const props = {
            onSendMessage: jest.fn(),
        }

        const element = shallow(<ChatForm {...props} />);
        element.find({ label: "Имя" }).at(0).simulate('change', { target: { value: name } })
        element.find({ label: "Текст" }).at(0).simulate('change', { target: { value: content } })
        element.find(Button).simulate('click', { preventDefault: () => { } });

        expect(props.onSendMessage).toHaveBeenCalledTimes(1)
        expect(props.onSendMessage).toHaveBeenCalledWith({ name, content })
    })
}) 