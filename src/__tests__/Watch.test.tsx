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
    console.log(component.debug());
    watch = findTestElement(component, 'watch');
    watchContainer = findTestElement(component, 'watch-container');
    watchActions = findTestElement(component, 'watch-actions');
    const mockfn = jest.fn();
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
    const buttonStart = watchActions.find('.sc-hLBbgP');
    expect(buttonStart.length).toBe(1);
    expect(buttonStart.simulate('click').length).toBeGreaterThan(0);
  });
  // test('renders Stop Button when click to Start', () => {
  //   const buttonStart = watchActions.find('.sc-hLBbgP');
  //   const buttonStop = watchActions.find('.sc-eDvSVe');
  //   buttonStart.simulate('click');
  //   component.update();
  //   buttonStart.update();
  //   buttonStop.update();
  //   expect(buttonStart.length).toBe(0);
  //   expect(buttonStop.length).toBe(1);
  // });
  test('renders right button Stop at the first render', () => {
    const buttonStop = watchActions.find('.sc-eDvSVe');
    expect(buttonStop.length).toBe(0);
  });
  test('renders right button Mark at the first render', () => {
    const buttonMark = watchActions.find('.sc-gKPRtg');
    expect(buttonMark.length).toBe(0);
  });
  test('renders right button Reset at the first render', () => {
    const buttonReset = watchActions.find('.sc-jSUZER');
    expect(buttonReset.length).toBe(1);
    expect(buttonReset.simulate('click').length).toBeGreaterThan(0);
  });
});
