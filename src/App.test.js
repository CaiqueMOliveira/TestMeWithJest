import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const createShallowWrapper = (props = {}, state = null) => {
  return shallow(<App {...props} />);
};

const findWrapperByTestAttribute = (wrapper, testAttributeValue) => {
  return wrapper.find(`[data-test="${testAttributeValue}"]`);
};

it('renders without error', () => {
  const wrapper = createShallowWrapper();
  const appComponent = findWrapperByTestAttribute(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

it('renders increment button', () => {
  const wrapper = createShallowWrapper();
  const counterDisplay = findWrapperByTestAttribute(wrapper, "increment-button");
  expect(counterDisplay.length).toBe(1);
});

it('renders counter display', () => {
  const wrapper = createShallowWrapper();
  const incrementButton = findWrapperByTestAttribute(wrapper, "counter-display");
  expect(incrementButton.length).toBe(1);
});

it('couter starts at 0', () => {

});

it('clicking button increments counter display', () => {

});