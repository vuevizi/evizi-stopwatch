import {Watch} from '../components/';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Middleware} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {findTestElement} from '../utils/test.utils';
import toJson from 'enzyme-to-json';

const middlewares: Middleware[] = [];
const mockStore = configureStore(middlewares);

describe('Watch Test', () => {
  let store;
  let component: any;
  let watchContainer: any;
  let watch: any;
  let watchActions: any;
  beforeEach(() => {
    store = mockStore({
      amountOfRecords: 0,
      timeRecords: [],
    });
    component = mount(
      <Provider store={store}>
        <Watch />
      </Provider>
    );
    watch = findTestElement(component, 'watch');
    watchContainer = findTestElement(component, 'watch-container');
    watchActions = findTestElement(component, 'watch-actions');
  });
  test('renders without crash', () => {
    expect(component.length).toBe(1);
  });
  test('renders matching with snapshot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
  test('renders right minutes,seconds,milliseconds elements', () => {
    const minutesText = findTestElement(watch, 'minutes');
    const secondsText = findTestElement(watch, 'seconds');
    const millisecondsText = findTestElement(watch, 'milliseconds');
    expect(millisecondsText.length).toEqual(1);
    expect(minutesText.length).toEqual(1);
    expect(secondsText.length).toEqual(1);
    expect(minutesText.text()).toEqual('00');
    expect(secondsText.text()).toEqual('00');
    expect(millisecondsText.text()).toEqual('00');
  });
  test('renders right button Start at the first render', () => {
    const buttonStart = findTestElement(watchActions, 'button-start');
    expect(buttonStart.length).toBe(1);
    console.log(buttonStart.instance());
  });
  test('renders right button Stop at the first render', () => {
    const buttonStop = findTestElement(watchActions, 'button-stop');
    expect(buttonStop.length).toBe(0);
  });
  test('renders right button Mark at the first render', () => {
    const buttonMark = findTestElement(watchActions, 'button-mark');
    expect(buttonMark.length).toBe(0);
  });
  test('renders right button Reset at the first render', () => {
    const buttonReset = findTestElement(watchActions, 'button-reset');
    expect(buttonReset.length).toBe(1);
  });
});
