import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import { exec } from 'child_process';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

it('renders increment button', () => {

});

it('renders counter display', () => {

});

it('couter starts at 0', () => {

});

it('clicking button increments counter display', () => {

});