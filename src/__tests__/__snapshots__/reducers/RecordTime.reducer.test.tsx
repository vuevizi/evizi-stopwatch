import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {shallow} from 'enzyme';
import App from '../../../App';
import toJson from 'enzyme-to-json';
const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
  let store;
  let component: any;
  beforeEach(() => {
    store = mockStore({
      amountOfRecords: 0,
      timeRecords: [],
    });
    store.dispatch = jest.fn();
    component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('should dispatch an action on button click', () => {});
  it('should render with given state from Redux store', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
