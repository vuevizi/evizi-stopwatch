import {MainLayout,Header,Footer} from "../layouts";
import {findTestElement} from "../utils/test.utils";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
const setUpComponent = (props={}) => {
    const component:any = shallow(<MainLayout {...props}/>)
    return component;
}

describe("Main Layout",()=>{
    let component:any;
    beforeEach(()=>{
        component = setUpComponent();
    });
    test("renders without crash",()=>{
        expect(component.length).toBe(1);
    })
    test("renders the Header correctly",()=>{
        const header = shallow(<Header/>);
        expect(header.length).toBe(1);
    });
    test("renders the Footer correctly",()=>{
        const footer = shallow(<Footer/>);
        expect(footer.length).toBe(1);
    })
    test("renders the Main Content correctly",()=>{
        const mainContent = findTestElement(component,"main-content");
        expect((mainContent.length)).toBe(1);
    })
    test("renders Watch and Table Timer in Main Content",()=>{
        const watch = findTestElement(component,"watch");
        const tableTimer = findTestElement(component,"table-timer");
        expect(watch.length).toBe(1);
        expect(tableTimer.length).toBe(1);
    })
    test("renders match to snapshots",()=>{
        expect(toJson(component)).toMatchSnapshot();
    })
})
