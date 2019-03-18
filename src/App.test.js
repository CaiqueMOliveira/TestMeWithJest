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
  const wrapper = shallow(<App />);
  const counterDisplay = wrapper.find("[data-test='increment-button']");
  expect(counterDisplay.length).toBe(1);
});

it('renders counter display', () => {
  const wrapper = shallow(<App />);
  const incrementButton = wrapper.find("[data-test='counter-display']");
  expect(incrementButton.length).toBe(1);
});

it('couter starts at 0', () => {

});

it('clicking button increments counter display', () => {

});