import {Header} from '../layouts';
import {shallow} from 'enzyme';
import {findTestElement} from '../utils/test.utils';
import toJson from 'enzyme-to-json';

const setUpComponent = (props = {}) => {
  const component: any = shallow(<Header {...props} />);
  return component;
};
describe('Header', () => {
  let component: any;
  beforeEach(() => {
    component = setUpComponent();
  });
  test('renders without crash', () => {
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
  test('renders logo correctly', () => {
    const headerContainer = findTestElement(component, 'header-container');
    const headerLogo = findTestElement(headerContainer, 'header-logo');
    expect(headerLogo.length).toBe(1);
    expect(headerLogo.text()).toBe('Stop Watch');
  });
});
