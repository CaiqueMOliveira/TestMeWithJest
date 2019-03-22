import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const createShallowWrapper = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
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
  const incrementButton = findWrapperByTestAttribute(wrapper, "increment-button");
  expect(incrementButton.length).toBe(1);
});

it('renders counter display', () => {
  const wrapper = createShallowWrapper();
  const counterDisplay = findWrapperByTestAttribute(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

it('couter starts at 0', () => {
  const wrapper = createShallowWrapper();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

it('clicking button increments counter display', () => {
  const initialCounter = 7;
  const wrapper = createShallowWrapper(null, { counter: initialCounter });

  const incrementButton = findWrapperByTestAttribute(wrapper, 'increment-button');
  incrementButton.simulate('click');
  wrapper.update();

  const counterDisplay = findWrapperByTestAttribute(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(initialCounter + 1);
});

it('should render decrement button', () => {
  const wrapper = createShallowWrapper();
  const decrementButton = findWrapperByTestAttribute(wrapper, 'decrement-button');
  expect(decrementButton.length).toBe(1);
});

it('should decrement the counter on clicking', () => {
  const initialCounter = 3;
  const wrapper = createShallowWrapper(null, { counter: initialCounter });
  const decrementButton = findWrapperByTestAttribute(wrapper, 'decrement-button');
  decrementButton.simulate('click');
  wrapper.update();

  const counterDisplay = findWrapperByTestAttribute(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(initialCounter - 1);
});

it('shouldn\'t decrement below 0', () => {
  const initialCounter = 0;
  const wrapper = createShallowWrapper(null, { counter: initialCounter });
  const decrementButton = findWrapperByTestAttribute(wrapper, 'decrement-button');
  decrementButton.simulate('click');

  wrapper.update();

  const counterDisplay = findWrapperByTestAttribute(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(0);
});

it('should render the error display', () => {
  const wrapper = createShallowWrapper();
  const errorDisplay = findWrapperByTestAttribute(wrapper, 'error-display');
  expect(errorDisplay.length).toBe(1);
});

