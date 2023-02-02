import App from '../App';
import {shallow} from 'enzyme';
import {MainLayout} from '../layouts';
import React from 'react';
import toJson from 'enzyme-to-json';

describe('App Component', () => {
  const wrapper = shallow(<App />);
  const container = (
    <div className="App">
      <MainLayout />
    </div>
  );
  test('renders without crash', () => {
    shallow(<App />);
  });
  test('renders right container', () => {
    expect(wrapper.contains(container)).toEqual(true);
    expect(wrapper.find('div.App')).toHaveLength(1);
  });
  test('renders the Mainlayout', () => {
    expect(wrapper.contains(<MainLayout />)).toEqual(true);
  });
  it('renders correctly', () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
