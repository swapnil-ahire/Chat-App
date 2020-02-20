import React from "react";
import { shallow } from 'enzyme';
import ChatHistory from './ChatHistory';

describe('ChatHistory', () => {
    it('Renders ChatHistory', () => {
        const chatHistory = shallow(<ChatHistory />);
        expect(chatHistory).toMatchSnapshot();
    });

    it('Renders ChatHistory with classname', () => {
        const chatHistory = shallow(<ChatHistory className="my-class" />);
        expect(chatHistory).toMatchSnapshot();
    });
});