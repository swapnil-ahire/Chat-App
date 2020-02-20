/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ChatInterface from './ChatInterface';

describe('ChatInterface', () => {
  it('Renders ChatInterface', () => {
    const chatInterface = shallow(<ChatInterface />);
    expect(chatInterface).toMatchSnapshot();
  });

  it('Renders ChatInterface with classname', () => {
    const chatInterface = shallow(<ChatInterface className="my-class" />);
    expect(chatInterface).toMatchSnapshot();
  });
});
